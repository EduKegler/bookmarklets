if (location.href === 'https://experiencia.xpi.com.br/conta/#/carteira') {
    const section = document.querySelector('.soma-accordion.hydrated')
    const closedItems = Array.from(section.querySelectorAll('.soma-accordion-item.supressHeaderPadding.hydrated:not(.expanded)'));
    closedItems.forEach(e => e.querySelector('.accordion-chevron.hydrated').click())
    new Promise(resolve => setTimeout(resolve, 2000)).then(() => {
        const assets = Array.from(document.querySelectorAll('soma-table-row.soma-table-row.soma-table-row-collapsable.default.hydrated')).map((e) => ({ name: e.querySelector('soma-table-cell p').textContent, value: e.querySelector('soma-table-cell p span').textContent.replace('R$', '').trim() }))
        const order = ['CDB BANCO MASTER DE INVESTIME - JAN/2028', 'LFT mar/2026', 'TRXF11', 'MCCI11', 'VGIP11', 'MALL11', 'FIQE3', 'SOJA3', 'MLAS3', 'ALOS3']
        const newList = order.map((o) => assets.find((asset) => asset.name === o))
        const listString = newList.map(item => item.value).join('\n')
        navigator.clipboard.writeText(listString);
        alert('Copied to clipboard from XP!')
    });
} else { 
    alert('Please run this script on XPi page!')
}