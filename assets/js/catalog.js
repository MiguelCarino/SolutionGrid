// catalog.js
export const freeSoftware = [
    {
        id: 'Firefox Web Browser',
        url: 'https://www.mozilla.org/en-US/firefox/new/',
        solution: 'Firefox',
        cdeb: 'firefox',
        cfed: 'firefox',
        cwin: 'Mozilla.Firefox',
        cmac: '--cask firefox'
    },
    {
        id: 'Office Suite',
        url: 'https://www.onlyoffice.com/download-desktop.aspx',
        solution: 'Only Office',
        cdeb: '&& wget https://download.onlyoffice.com/install/desktop/editors/linux/onlyoffice-desktopeditors_amd64.deb && sudo dpkg -i onlyoffice-desktopeditors_amd64.deb && rm onlyoffice-desktopeditors_amd64.deb',
        cfed: 'https://download.onlyoffice.com/install/desktop/editors/linux/onlyoffice-desktopeditors.x86_64.rpm',
        cwin: 'ONLYOFFICE.DesktopEditors',
        cmac: '--cask onlyoffice'
    }
];

export const documents = [
    {
        id: 'Technical Documentation',
        url1: 'https://bing.com/',
        url2: 'https://google.com/',
        url3: 'https://yandex.com/',
        solution: '',
    },
    {
        id: 'Quote',
        url1: 'https://bing.com/',
        url2: 'https://google.com/',
        url3: 'https://yandex.com/',
        solution: '',
    }
];

export const commercialSoftware = [
    {
        id: 'Photo Editor',
        url: 'https://www.adobe.com/products/photoshop.html',
        solution: 'Adobe Photoshop',
        cdeb: 'Sorry, not available',
        cfed: 'Sorry, not available',
        cwin: 'Sorry, not available',
        cmac: '--cask adobe-photoshop'
    },
    {
        id: 'Video Editor',
        url: 'https://www.adobe.com/products/premiere.html',
        solution: 'Adobe Premiere Pro',
        cdeb: 'Sorry, not available',
        cfed: 'Sorry, not available',
        cwin: 'Sorry, not available',
        cmac: '--cask adobe-premiere-pro'
    }
];

export const websites = [
    {
        id: 'Windows "winget" package browser',
        url: 'https://winget.run/',
        solution: 'Winget.run'
    },
    {
        id: 'macOS "brew" package browser',
        url: 'https://formulae.brew.sh/',
        solution: 'formulae.brew.sh'
    }
];

export const restricted = [
    {
        id: 'Russian Torrent Index',
        url: 'https://rutracker.org',
        solution: ''
    },
    {
        id: 'East Asian Media and Anime Torrent Index',
        url: 'https://nyaa.si',
        solution: ''
    }
];

export const allSoftware = [...freeSoftware, ...documents, ...commercialSoftware, ...websites, ...restricted];
