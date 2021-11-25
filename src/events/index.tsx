const openSideNav = () => {
    document.querySelector('#nav-top-menu-bar')?.addEventListener('click', () => {
        document.querySelector('#nav-side')?.classList.add('active')
        document.querySelectorAll('.overlay')?.forEach(overlay => overlay.classList.add('active'))
    })
}

const closeSideNav = () => {
    document.querySelector('#nav-side-menu-close')?.addEventListener('click', () => {
        removeSideNavActive()
    })
}

const removeOverlay = () => {
    const overlays = document.querySelectorAll('.overlay')
    overlays?.forEach(overlay => {
        overlay.addEventListener('click', () => {
            removeSideNavActive()
        })
    })
}

const removeSideNavActive = () => {
    console.log("remove active")
    document.querySelector('#nav-side')?.classList.remove('active')
    document.querySelectorAll('.overlay')?.forEach(overlay => overlay.classList.remove('active'))
}

export { openSideNav, closeSideNav, removeOverlay, removeSideNavActive }