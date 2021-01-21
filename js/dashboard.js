const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(topAppBarElement);

const drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

//const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
topAppBar.setScrollTarget(document.getElementById('scrollbar'));

topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
});

const menu = mdc.menu.MDCMenu.attachTo(document.querySelector('#actinfo'));
const menuMsg = mdc.menu.MDCMenu.attachTo(document.querySelector('#message'));
menu.open = false;
menuMsg.open = false;

const actBtn = document.querySelector('#account');
actBtn.addEventListener('click', () => {
    menu.open = !menu.open;
});

const msgActionBtn = document.querySelector('#msgbtn');
msgActionBtn.addEventListener('click', () => {
    menuMsg.open = !menuMsg.open;
});

const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));
