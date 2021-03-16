// parse func
const parseTableToJson = tableHtmlStr => {
  const trRe = /<tr>.*?<\/tr>/gs;
  const trs = tableHtmlStr.match(trRe); // console.log(trs)
  // trs.forEach(v => console.log(v))

  const tdRe = /<td>(.*?)<\/td>/gs;
  const tableArray = trs.map((tr, i) => {
    tds = [...tr.matchAll(tdRe)];
    const trtds = tds.map(td => td[1]); // console.log(i, trtds, '')
    // console.log(`${i}: ${trtds}\n`)

    return trtds;
  }); // parse & format

  const tableParsed = JSON.stringify(tableArray).replaceAll('[[', '\"body\": [\n[').replaceAll(']]', ']\n]').replaceAll('],', '],\n').replaceAll('[\"', '\t[\"').replaceAll('\",\"', '\", \"');
  console.log(tableParsed);
  return tableParsed;
};