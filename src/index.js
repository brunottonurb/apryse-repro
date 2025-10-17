import WebViewer from '@pdftron/webviewer'

const element = document.getElementById('viewer');

const webViewerInstance = await WebViewer.Iframe(
    {
        ui: 'legacy',
        path: '/lib/webviewer',
        licenseKey: 'demo:1736852983506:7e8a1d4a03000000007f655284eb37b7fdd3222f7e911d8145025b71d2',
        fullAPI: true,
        // disabledElements: [
        //     'downloadButton',
        //     'printButton',
        //     'highlightToolGroupButton',
        //     'underlineToolGroupButton',
        //     'strikeoutToolGroupButton',
        //     'squigglyToolGroupButton',
        //     'stickyToolGroupButton',
        //     'freeTextToolGroupButton',
        //     'shapeToolGroupButton',
        //     'freeHandToolGroupButton',
        //     'freeHandHighlightToolGroupButton',
        //     'eraserToolButton',
        //     'leftPanelButton',
        //     'searchButton',
        //     'menuButton',
        //     'toggleNotesButton',
        //     'ribbonsDropdown',
        //     // 'selectToolButton',
        //     'toolsHeader',
        //     'ribbons',

        //     // The dropdown menu for the annotation tools, when you select an annotation
        //     // 'annotationCommentButton',
        //     // 'annotationStyleEditButton',
        //     // 'linkButton',
        //     'annotationPopup', // disable the whole popup/dropdown menu for annotations

        //     // context menu
        //     'contextMenuPopup',

        //     // context menu when selecting text
        //     'textPopup',

        //     // rotation tools in the dropdown settings menu
        //     'rotateHeader',
        //     'rotateClockwiseButton',
        //     'rotateCounterClockwiseButton',
        //     'viewControlsDivider1',
        // ],
        initialDoc: 'https://apryse.s3.amazonaws.com/public/files/samples/WebviewerDemoDoc.pdf',
    },
    element,
);
const { Core: { annotationManager, documentViewer, Annotations } } = webViewerInstance;

// wait for document to be loaded
await new Promise((resolve) => {
    documentViewer.addEventListener('documentLoaded', resolve);
});

await new Promise((resolve) => setTimeout(resolve, 5000)); // prevent timing issues, otherwise the render is not correct, page is rotate, but dimensions/coordinates are not updated

// rotate first page counter-clockwise
const doc = documentViewer.getDocument();
await doc.rotatePages([1], -1);

await new Promise((resolve) => setTimeout(resolve, 5000)); // prevent timing issues, otherwise the render is not correct, page is rotate, but dimensions/coordinates are not updated

// 1st step

const res = await fetch('https://picsum.photos/200');
const imageBlob = await res.blob();
const reader = new FileReader();
await new Promise((resolve) => {
    reader.onloadend = async () => {
        resolve();
    };
    reader.readAsDataURL(imageBlob);
});
const stampAnnotation = new Annotations.StampAnnotation();
const base64data = reader.result;
await stampAnnotation.setImageData(base64data);
stampAnnotation.Width = 200;
stampAnnotation.Height = 120;
stampAnnotation.Author = annotationManager.getCurrentUser();
stampAnnotation.FillColor = new Annotations.Color(0, 0, 0, 0);
stampAnnotation.NoDelete = false;
stampAnnotation.NoMove = false;
stampAnnotation.NoResize = true;
stampAnnotation.NoRotate = true;
stampAnnotation.Id = Math.random().toString(36).substr(2, 9);
stampAnnotation.setCustomData('test123', 'hello world');
stampAnnotation.setCustomData('testJSON', JSON.stringify({ a: 1, b: 2 }));

// 2nd step

const pageNumber = 1;
const pageRotation = doc.getPageRotation(pageNumber);
stampAnnotation.PageNumber = pageNumber;
stampAnnotation.Rotation = pageRotation - 360;
// if the page is rotated sideways, the width and height of the stamp annotation need to be swapped
if (pageRotation === 270 || pageRotation === 90) {
    stampAnnotation.Width = 80;
    stampAnnotation.Height = 120;
} else {
    stampAnnotation.Width = 120;
    stampAnnotation.Height = 80;
}
const x = 100;
const y = 150;
stampAnnotation.X = x;
stampAnnotation.Y = y;

annotationManager.addAnnotation(stampAnnotation);
annotationManager.redrawAnnotation(stampAnnotation);


// await new Promise((resolve) => setTimeout(resolve, 5000)); // prevent timing issues

// // download the file with annotations
// const xfdfString = await annotationManager.exportAnnotations();
// const options = { xfdfString };
// const data = await doc.getFileData(options);
// const arr = new Uint8Array(data);
// const blob = new Blob([arr], { type: 'application/pdf' });

// const url = URL.createObjectURL(blob);
// window.open(url);