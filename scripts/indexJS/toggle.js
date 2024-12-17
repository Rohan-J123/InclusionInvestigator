function toggleSidebarOn() {
    var mainbar = document.getElementById('mainbar');
    var sidebar = document.getElementById('sidebar');

    if(window.innerWidth < 1000){
        sidebar.style.transition = '0s';
        mainbar.style.transition = '0s';
    }else{
        sidebar.style.transition = '1s';
        mainbar.style.transition = 'margin-right 1s';
        sidebar.style.height = 'calc(100vh - 100px)';
    }

    sidebar.style.width = sidebar.style.width === '600px' ? '0px' : '600px';

    document.getElementById('toggle-button-to-show-info').style.display="none";
    document.getElementById('toggle-button-to-show-info-start').style.display="none";
    document.getElementById('toggle-button-to-hide-info').style.display="block";

    sidebar.scrollIntoView({ behavior: 'smooth' });

    sessionStorage.setItem('info-dont-show', 'false');
}

function toggleSidebarOff() {
    var mainbar = document.getElementById('mainbar');
    var sidebar = document.getElementById('sidebar');

    if(window.innerWidth < 1000){
        sidebar.style.transition = '0s';
        mainbar.style.transition = '0s';
    }else{
        sidebar.style.transition = '1s';
        mainbar.style.transition = 'margin-right 1s';
    }

    sidebar.style.width = sidebar.style.width === '600px' ? '0px' : '600px';

    document.getElementById('toggle-button-to-show-info').style.display="block";
    document.getElementById('toggle-button-to-show-info-start').style.display="block";
    document.getElementById('toggle-button-to-hide-info').style.display="none";

    mainbar.scrollIntoView({ behavior: 'smooth' });
    sessionStorage.setItem('info-dont-show', 'true');
}

if(sessionStorage.getItem('info-dont-show') == 'true'){
    toggleSidebarOff();
}

function setInitialConditions(){
    var mainbar = document.getElementById('mainbar');
    var sidebar = document.getElementById('sidebar');

    if(window.innerWidth < 1000){
        sidebar.style.transition = '0s';
        mainbar.style.transition = '0s';
    }else{
        sidebar.style.transition = '1s';
        mainbar.style.transition = 'margin-right 1s';
        sidebar.style.height = 'calc(100vh - 100px)';
    }
}

setInitialConditions();

