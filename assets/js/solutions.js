// functions.js
import { allSoftware, documents, commercialSoftware, websites, restricted } from './catalog.js';

// Shuffle function to randomize the array
export function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Randomize the allSoftware array
shuffle(allSoftware);

export function addCell(software, type) {
    const softcell = document.createElement('a');
    softcell.target = '_blank';
    softcell.className = 'softcell';

    if (type === 'documents') {
        softcell.classList.add('documents-cell');
    } else if (type === 'commercialSoftware') {
        softcell.classList.add('commercial-software-cell');
    } else if (type === 'websites') {
        softcell.classList.add('websites-cell');
    } else if (type === 'restricted') {
        softcell.classList.add('restricted-cell');
    }

    const section1 = document.createElement('div');
    section1.className = 'section section1';
    section1.textContent = `${software.id}`;
    softcell.appendChild(section1);

    const section2 = document.createElement('div');
    section2.className = 'section section2';
    const linksec2 = document.createElement('a');
    linksec2.href = software.url;
    linksec2.textContent = `${software.solution}`;
    linksec2.target = '_blank';
    section2.appendChild(linksec2);
    softcell.appendChild(section2);

    const section3 = document.createElement('div');
    section3.className = 'section section3';

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Text copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }

    if (type === 'restricted') {
        ['dont'].forEach(os => {
            const button = document.createElement('span');
            const command = `${software.url}`;
            button.className = `dont-button span-space`;
            button.setAttribute('data-text', command);
            button.title = 'Click to copy command';
            button.addEventListener('click', () => {
                copyToClipboard(command);
                const message = `BEWARE\nUnlicensed or low-quality software. Block these sources. Use reliable alternatives. Test only on non-essential systems.\n"${command}" has been copied to clipboard.`;
                alert(message);
            });
            section3.appendChild(button);
        });
    } else if (type === 'commercialSoftware') {
        ['fedora', 'debian', 'windows', 'macos'].forEach(os => {
            const button = document.createElement('span');
            const command = os === 'fedora' ? `sudo dnf install ${software.cfed}` :
                os === 'debian' ? `sudo apt install ${software.cdeb}` :
                    os === 'windows' ? `winget install -e --id ${software.cwin}` :
                        `brew install ${software.cmac}`;
            button.className = `${os}-button span-space`;
            button.setAttribute('data-text', command);
            button.title = 'Click to copy command';
            button.addEventListener('click', () => {
                copyToClipboard(command);
                const message = `Command "${command}" has been copied to clipboard.`;
                alert(message);
            });
            section3.appendChild(button);
        });
    } else if (type === 'documents') {
        ['pdflin', 'librelin', 'mslin'].forEach(os => {
            const button = document.createElement('span');
            const command = os === 'pdflin' ? `${software.url1}` :
                os === 'librelin' ? `${software.url2}` :
                    `${software.url3}`;
            button.className = `${os}-button span-space`;
            button.setAttribute('data-text', command);
            if (os === 'pdflin') {
                button.title = `${software.url1}`;
                button.addEventListener('click', () => {
                    window.open(software.url1, '_blank');
                });
            } else if (os === 'librelin') {
                button.title = `${software.url2}`;
                button.addEventListener('click', () => {
                    window.open(software.url2, '_blank');
                });
            } else {
                button.title = `${software.id}`;
                button.addEventListener('click', () => {
                    window.open(software.url3, '_blank');
                });
            }
            section3.appendChild(button);
        });
    } else if (type === 'default') {
        ['fedora', 'debian', 'windows', 'macos'].forEach(os => {
            const button = document.createElement('span');
            const command = os === 'fedora' ? `sudo dnf install ${software.cfed}` :
                os === 'debian' ? `sudo apt install ${software.cdeb}` :
                    os === 'windows' ? `winget install -e --id ${software.cwin}` :
                        `brew install ${software.cmac}`;
            button.className = `${os}-button span-space`;
            button.setAttribute('data-text', command);
            button.title = 'Click to copy command';
            button.addEventListener('click', () => {
                copyToClipboard(command);
                const message = `Command "${command}" has been copied to clipboard.`;
                alert(message);
            });
            section3.appendChild(button);
        });
    }

    softcell.appendChild(section3);
    softwareid.appendChild(softcell);
}

export function searchFunction() {
    softwareid.innerHTML = "";
    const filter = searchInput.value.trim().toLowerCase();
    const filteredSoftware = allSoftware.filter(software => software.id.toLowerCase().includes(filter));
    filteredSoftware.forEach(software => {
        const type = documents.includes(software) ? 'documents' :
            commercialSoftware.includes(software) ? 'commercialSoftware' :
                websites.includes(software) ? 'websites' :
                    restricted.includes(software) ? 'restricted' : 'default';
        addCell(software, type);
    });
}

// Event listener for search input
searchInput.addEventListener('input', searchFunction);

// Populate the grid with cells for each type of software
allSoftware.forEach(software => {
    const type = documents.includes(software) ? 'documents' :
        commercialSoftware.includes(software) ? 'commercialSoftware' :
            websites.includes(software) ? 'websites' :
                restricted.includes(software) ? 'restricted' : 'default';
    addCell(software, type);
});
