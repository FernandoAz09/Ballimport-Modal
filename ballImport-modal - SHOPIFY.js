function createModalStyle() {
    var ballImportModalStyleExists = document.querySelector(".ballImport-Modal-style");

    if (!ballImportModalStyleExists) {
        var ballImportModalStyle = document.createElement('style');
        ballImportModalStyle.setAttribute('class', 'ballImport-Modal-style');
        ballImportModalStyle.innerHTML = '#ballImport-Modal.ballImport-Modal__Show .ballImport-Modal__Overlay {display: block}html:has(#ballImport-Modal.ballImport-Modal__Show) {overflow-y: hidden;}div#ballImport-Modal:not(.ballImport-Modal__Show) {display: none !important;}#ballImport-TableModalLink svg {width: 20px;height: 20px;position: absolute;top: 8px;fill: #2D0070 !important;color: #2D0070 !important;}#ballImport-TableModalLink {position: relative;padding: 10px 0;cursor: pointer;display: inline-block;}#ballImport-TableModalLink a {margin-left: 25px;color: #2D0070 !important;cursor: pointer;text-decoration: none;}#ballImport-Modal.ballImport-Modal__Show .ballImport-Modal__Container .ballImport-Modal__ContainerWrapper {opacity: 1;visibility: visible}#ballImport-Modal .ballImport-Modal__Overlay {background: #7b7b7b;border-color: #7b7b7b;opacity: .8;height: 100%;width: 100%;z-index: 2000;position: fixed;display: none}#ballImport-Modal .ballImport-Modal__Container .ballImport-Modal__ContainerWrapper {position: fixed;z-index: 2000;}#ballImport-Modal .ballImport-Modal__Container .ballImport-Modal__ContainerWrapper.ballImport-Modal__HasShadow {box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .19)}#ballImport-Modal .ballImport-Modal__Container .ballImport-Modal__ContainerWrapper header {border-bottom: 1px dotted #ccc;margin-bottom: .4em;font-size: 22px;padding: 9px 0 11px 20px;font-weight: 600}#ballImport-Modal .ballImport-Modal__Container .ballImport-Modal__ContainerWrapper .ballImport-Modal__Content {padding: 15px;overflow-y: auto;display: flex;justify-content: center;align-items: center;}#ballImport-Modal .ballImport-Modal__Container .ballImport-Modal__ContainerWrapper button.ballImport-Modal__Close {cursor: pointer;background: rgba(0, 0, 0, 0);border: 0;width: 50px;height: 53px;line-height: 34px;position: absolute;right: 0;top: -5px;font-size: 28px;user-select: none;}@media only screen and (max-width: 749px) {#ballImport-Modal .ballImport-Modal__Container .ballImport-Modal__ContainerWrapper {top: 10% !important;left: 50% !important;transform: translate(-50%, 0) !important;height: calc(100% - 300px) !important;width: 96% !important}#ballImport-Modal .ballImport-Modal__Container .ballImport-Modal__ContainerWrapper .ballImport-Modal__Content img {width: 100%;}#ballImport-Modal .ballImport-Modal__Container .ballImport-Modal__ContainerWrapper .ballImport-Modal__Content {padding: 10px;}}';
        document.body.appendChild(ballImportModalStyle);
    }
}

// //////////////////////////////////////////////////////////

function createModalLink() {
    var linkExistente = document.getElementById('ballImport-TableModalLink');

    if (!linkExistente) {
        var ballImportModalLink = document.createElement('div');
        ballImportModalLink.id = 'ballImport-TableModalLink';
        ballImportModalLink.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="544pt" version="1.1" viewBox="1 -69 544.607 544" width="544pt" class="ballImportLinkImg"> <g id="surface1"> <path d="M 186.742188 198.046875 C 231.867188 198.046875 268.667969 170.335938 268.667969 136.386719 C 268.667969 102.433594 231.976562 74.722656 186.742188 74.722656 C 141.507812 74.722656 104.816406 102.433594 104.816406 136.386719 C 104.816406 170.335938 141.617188 198.046875 186.742188 198.046875 Z M 186.742188 96.625 C 219.597656 96.625 246.761719 114.808594 246.761719 136.382812 C 246.761719 157.960938 219.269531 176.140625 186.742188 176.140625 C 154.210938 176.140625 126.71875 157.960938 126.71875 136.382812 C 126.71875 114.808594 154.210938 96.515625 186.742188 96.515625 Z M 186.742188 96.625 "></path> <path d="M 534.046875 250.292969 L 372.386719 250.292969 L 372.386719 136.273438 C 372.386719 61.359375 289.039062 0.355469 186.195312 0.355469 C 83.347656 0.355469 0 61.359375 0 136.273438 L 0 270.992188 C 0 339.992188 70.644531 396.945312 161.660156 405.597656 L 163.523438 405.597656 C 171.078125 406.257812 178.746094 406.804688 186.523438 406.804688 L 534.046875 406.804688 C 540.09375 406.804688 545 401.898438 545 395.851562 L 545 261.242188 C 545 255.199219 540.09375 250.292969 534.046875 250.292969 Z M 186.742188 22.367188 C 277.097656 22.367188 351.03125 73.515625 351.03125 136.386719 C 351.03125 199.253906 277.539062 250.402344 186.742188 250.402344 C 95.945312 250.402344 22.453125 199.253906 22.453125 136.382812 C 22.453125 73.515625 96.492188 22.367188 186.742188 22.367188 Z M 351.03125 200.238281 L 351.03125 250.292969 L 287.503906 250.292969 C 312.300781 239.054688 333.933594 221.859375 350.480469 200.238281 Z M 523.09375 384.898438 L 501.1875 384.898438 L 501.1875 329.476562 C 501.1875 323.433594 496.28125 318.523438 490.238281 318.523438 C 484.191406 318.523438 479.285156 323.429688 479.285156 329.476562 L 479.285156 385.007812 L 435.472656 385.007812 L 435.472656 354.886719 C 435.472656 348.839844 430.566406 343.933594 424.519531 343.933594 C 418.472656 343.933594 413.566406 348.839844 413.566406 354.886719 L 413.566406 385.007812 L 369.757812 385.007812 L 369.757812 354.886719 C 369.757812 348.839844 364.851562 343.933594 358.804688 343.933594 C 352.757812 343.933594 347.851562 348.839844 347.851562 354.886719 L 347.851562 385.007812 L 304.039062 385.007812 L 304.039062 329.476562 C 304.039062 323.433594 299.132812 318.523438 293.085938 318.523438 C 287.042969 318.523438 282.132812 323.429688 282.132812 329.476562 L 282.132812 385.007812 L 240.1875 385.007812 L 240.1875 354.886719 C 240.1875 348.839844 235.277344 343.933594 229.234375 343.933594 C 223.1875 343.933594 218.28125 348.839844 218.28125 354.886719 L 218.28125 385.007812 L 186.734375 385.007812 C 182.574219 385.007812 178.523438 385.007812 174.46875 385.007812 L 174.46875 354.886719 C 174.46875 348.839844 169.5625 343.933594 163.515625 343.933594 C 157.46875 343.933594 152.5625 348.839844 152.5625 354.886719 L 152.5625 382.378906 C 78.640625 371.425781 23 325.644531 23 270.882812 L 23 200.238281 C 54.324219 243.0625 115.988281 272.195312 187.289062 272.195312 L 523.09375 272.195312 Z M 523.09375 384.898438 "></path> </g> </svg> <a>Tabela de Medidas</a>';

        var seletorElemento = document.querySelector('.product-form__variants');
        seletorElemento.append(ballImportModalLink);
    }
}

// //////////////////////////////////////////////////////////
function createModal() {
    if (!document.getElementById('ballImport-Modal')) {
        var ballImportModal = document.createElement('div');
        ballImportModal.id = 'ballImport-Modal';
        ballImportModal.innerHTML = '<div class="ballImport-Modal__Overlay" style="background: rgb(123, 123, 123); border-color: rgb(123, 123, 123);"></div><div class="ballImport-Modal__Container"><div class="ballImport-Modal__ContainerWrapper ballImport-Modal__Full ballImport-Modal__HasShadow"style="background: rgb(255, 255, 255); border-color: rgb(0, 0, 0); color: rgb(0, 0, 0); border-radius: 3px; height: 95%; width: 95%; top: 50%; left: 50%; transform: translate(-50%, -50%);"><header>Tabela de Medidas</header><div id="ballImport-modal-content" class="ballImport-Modal__Content" style="height: calc(100% - 95px);"><div><p><img src="https://i.ibb.co/CPB27td/tabela-de-medidas-ball-2023-6.png" alt="Uploaded Image"style="display: block; margin-left: auto; margin-right: auto;"></p></div></div><button title="Close (Esc)" type="button" class="ballImport-Modal__Close"style="color: rgb(0, 0, 0);">x</button></div></div>';
        document.body.prepend(ballImportModal);
    }
}

// //////////////////////////////////////////////////////////
function openModal() {
    document.querySelector('#ballImport-TableModalLink>a').addEventListener('click', function () {
        document.querySelector('#ballImport-Modal').classList.add('ballImport-Modal__Show');
    });
}

// //////////////////////////////////////////////////////////
function closeModal() {
    document.querySelector('.ballImport-Modal__Close').addEventListener('click', function () {
        document.querySelector('#ballImport-Modal').classList.remove('ballImport-Modal__Show');
    });
}

// //////////////////////////////////////////////////////////
function initializeModal() {
    createModalStyle();
    createModalLink();
    createModal();
    closeModal();
    openModal();
}

setTimeout(initializeModal, 300);

