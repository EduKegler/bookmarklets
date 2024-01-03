const assets = Array.from(document.querySelectorAll('soma-table-row.soma-table-row.soma-table-row-collapsable.default.hydrated')).map((e) => ({ name: e.querySelector('soma-table-cell p').textContent, value: e.querySelector('soma-table-cell p span').textContent.replace('R$', '').trim() }))

const order = ['TRXF11', 'MCCI11', 'VGIP11', 'MALL11', 'FIQE3', 'SOJA3', 'MLAS3', 'ALOS3']

const newList = order.map((o) => assets.find((asset) => asset.name === o))

console.log(newList.map(item => item.value).join('\n'))