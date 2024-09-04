document.addEventListener("DOMContentLoaded", function() {
    // Dynamically add the Font Awesome CSS
    const faLink = document.createElement('link');
    faLink.rel = 'stylesheet';
    faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
    document.head.appendChild(faLink);
    //Current page title
    const currentTitle = document.title;

    // Navigation content with icons
    const navContent = `
        
        <div class="logo"><a href="index.html"><b style="color: #ffffff">Solution </b><b style="color: #000000">Grid</b></a></div>
        <b style="color: #ffffff">${currentTitle.split(' ')[0]}</b>
        <ul>
            <li><a href="https://github.com/MiguelCarino/SolutionGrid" target="_blank" class="icon-link">
                <i class="fab fa-github"></i> <span class="label">GitHub</span>
            </a></li>
        </ul>
    `;
    document.getElementById('navbar').innerHTML = navContent;

    // Footer content
    const footerContent = `
         <p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="index.html">This website</a> is marked with <a href="https://creativecommons.org/publicdomain/zero/1.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC0 1.0 Universal<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/zero.svg?ref=chooser-v1" alt=""></a></p> 
    `;
    document.getElementById('footer').innerHTML = footerContent;
});
