// parse func
const converterTableToJson = tableHtmlStr => {
  const trRe = /<tr>.*?<\/tr>/gs;
  const trs = tableHtmlStr.match(trRe); // console.log(trs)
  // trs.forEach(v => console.log(v))

  const tdRe = /<td>(.*?)<\/td>/gs;
  const tableArray = trs.map((tr, i) => {
    tds = [...tr.matchAll(tdRe)];
    const trtds = tds.map(td => td[1]); // console.log(i, trtds, '')
    // console.log(`${i}: ${trtds}\n`)

    return trtds;
  }); //

  const isIndent = true;
  const tabn = 4;
  const indent = isIndent ? Array(tabn).fill(0).reduce(prev => prev + '\t', '') : ''; // parse & format

  const tableParsed = JSON.stringify(tableArray).replaceAll(`[[`, `${indent}"body": [\n[`).replaceAll(`]]`, `]\n${indent}]`).replaceAll(`],`, `],\n`).replaceAll(`["`, `${indent + '\t'}["`).replaceAll(`","`, `", "`);
  console.log(tableParsed);
  return tableParsed;
};