function toggleTheme() {
    const body = document.getElementById('MainContainer');
    const toggleThemeSwitch = document.getElementById('toggleThemeSwitch');
    const toggleTheme = document.getElementById('toggleTheme');
    const MainHeader = document.getElementById('MainHeader');
    const RightNavSubLButton1 = document.getElementById('RightNavSubLButton1');
    const RightNavSubLButton2 = document.getElementById('RightNavSubLButton2');
    const SunImg = document.getElementById('SunImg');
    const MoonImg = document.getElementById('MoonImg');
    const ShowMore1 = document.getElementById('ShowMore1');
    const ShowMore2 = document.getElementById('ShowMore2');
    const GridItem1Left = document.getElementById('GridItem1Left');
    const GridItem1RightS = document.getElementById('GridItem1RightS');

    // /////////////////
    if (MoonImg.style.display === 'none') {
        MoonImg.style.display = 'block';
    } else {
        MoonImg.style.display = 'none';
    }

    if (SunImg.style.display === 'block') {
        SunImg.style.display = 'none';
    } else {
        SunImg.style.display = 'block';
    }
    
    
    // /////////////////
    if (body.classList.contains('lightThemeMainMain')) {
        body.classList.remove('lightThemeMainMain');
        body.classList.add('darkThemeMainMain');
    } else {
        body.classList.remove('darkThemeMainMain');
        body.classList.add('lightThemeMainMain');
    }
    
    // /////////////////
    if (toggleTheme.classList.contains('toggleThemeD')) {
        toggleTheme.classList.remove('toggleThemeD');
        toggleTheme.classList.add('toggleThemeL');
    } else {
        toggleTheme.classList.remove('toggleThemeL');
        toggleTheme.classList.add('toggleThemeD');
    }
    
    
    // /////////////////
    if (GridItem1RightS.classList.contains('GridItem1RightSD')) {
        GridItem1RightS.classList.remove('GridItem1RightSD');
        GridItem1RightS.classList.add('GridItem1RightSL');
    } else {
        GridItem1RightS.classList.remove('GridItem1RightSL');
        GridItem1RightS.classList.add('GridItem1RightSD');
    }
    
    // /////////////////
    if (GridItem1Left.classList.contains('GridItem1LeftD')) {
        GridItem1Left.classList.remove('GridItem1LeftD');
        GridItem1Left.classList.add('GridItem1LeftL');
    } else {
        GridItem1Left.classList.remove('GridItem1LeftL');
        GridItem1Left.classList.add('GridItem1LeftD');
    }
    
    // /////////////////
    if (ShowMore1.classList.contains('ShowMore1D')) {
        ShowMore1.classList.remove('ShowMore1D');
        ShowMore1.classList.add('ShowMore1L');
    } else {
        ShowMore1.classList.remove('ShowMore1L');
        ShowMore1.classList.add('ShowMore1D');
    }
    // /////////////////
    if (ShowMore2.classList.contains('ShowMore2D')) {
        ShowMore2.classList.remove('ShowMore2D');
        ShowMore2.classList.add('ShowMore2L');
    } else {
        ShowMore2.classList.remove('ShowMore2L');
        ShowMore2.classList.add('ShowMore2D');
    }
    // /////////////////
    if (MainHeader.classList.contains('MainHeaderD')) {
        MainHeader.classList.remove('MainHeaderD');
        MainHeader.classList.add('MainHeaderL');
    } else {
        MainHeader.classList.remove('MainHeaderL');
        MainHeader.classList.add('MainHeaderD');
    }
    // /////////////////
    if (RightNavSubLButton1.classList.contains('RightNavSubLButton1D')) {
        RightNavSubLButton1.classList.remove('RightNavSubLButton1D');
        RightNavSubLButton1.classList.add('RightNavSubLButton1L');
    } else {
        RightNavSubLButton1.classList.remove('RightNavSubLButton1L');
        RightNavSubLButton1.classList.add('RightNavSubLButton1D');
    }
    // /////////////////
    if (RightNavSubLButton2.classList.contains('RightNavSubLButton2D')) {
        RightNavSubLButton2.classList.remove('RightNavSubLButton2D');
        RightNavSubLButton2.classList.add('RightNavSubLButton2L');
    } else {
        RightNavSubLButton2.classList.remove('RightNavSubLButton2L');
        RightNavSubLButton2.classList.add('RightNavSubLButton2D');
    }

    // /////////////////
    if (toggleThemeSwitch.classList.contains('toggleThemeSwitchAnimB')) {
        toggleThemeSwitch.classList.remove('toggleThemeSwitchAnimB');
        toggleThemeSwitch.classList.add('toggleThemeSwitchAnimF');
    } else {
        toggleThemeSwitch.classList.remove('toggleThemeSwitchAnimF');
        toggleThemeSwitch.classList.add('toggleThemeSwitchAnimB');
    }
}


function ShowMore1() {

    const ShowMore1 = document.getElementById('ShowMore1');
    const ShowMore2 = document.getElementById('ShowMore2');

    // /////////////////
    if (ShowMore1.classList.contains('ShowMore1B')) {
        ShowMore1.classList.remove('ShowMore1B');
        ShowMore1.classList.add('ShowMore1A');
    } else {
        ShowMore1.classList.remove('ShowMore1A');
        ShowMore1.classList.add('ShowMore1B');
    }


    if (ShowMore2.classList.contains('ShowMore2A')) {
        ShowMore2.classList.remove('ShowMore2A');
        ShowMore2.classList.add('ShowMore2B');
    } 


}

function ShowMore2() {

    const ShowMore1 = document.getElementById('ShowMore1');
    const ShowMore2 = document.getElementById('ShowMore2');

    // /////////////////
    if (ShowMore2.classList.contains('ShowMore2B')) {
        ShowMore2.classList.remove('ShowMore2B');
        ShowMore2.classList.add('ShowMore2A');
    } else {
        ShowMore2.classList.remove('ShowMore2A');
        ShowMore2.classList.add('ShowMore2B');
    }


    if (ShowMore1.classList.contains('ShowMore1A')) {
        ShowMore1.classList.remove('ShowMore1A');
        ShowMore1.classList.add('ShowMore1B');
    } 
}

