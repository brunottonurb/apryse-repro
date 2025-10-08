import WebViewer from '@pdftron/webviewer'

const element = document.getElementById('viewer');

const webViewerInstance = await WebViewer.Iframe(
    {
        ui: 'legacy',
        path: '/lib/webviewer',
        // licenseKey,
        fullAPI: true,
        disabledElements: [
            'downloadButton',
            'printButton',
            'highlightToolGroupButton',
            'underlineToolGroupButton',
            'strikeoutToolGroupButton',
            'squigglyToolGroupButton',
            'stickyToolGroupButton',
            'freeTextToolGroupButton',
            'shapeToolGroupButton',
            'freeHandToolGroupButton',
            'freeHandHighlightToolGroupButton',
            'eraserToolButton',
            'leftPanelButton',
            'searchButton',
            'menuButton',
            'toggleNotesButton',
            'ribbonsDropdown',
            // 'selectToolButton',
            'toolsHeader',
            'ribbons',

            // The dropdown menu for the annotation tools, when you select an annotation
            // 'annotationCommentButton',
            // 'annotationStyleEditButton',
            // 'linkButton',
            'annotationPopup', // disable the whole popup/dropdown menu for annotations

            // context menu
            'contextMenuPopup',

            // context menu when selecting text
            'textPopup',

            // rotation tools in the dropdown settings menu
            'rotateHeader',
            'rotateClockwiseButton',
            'rotateCounterClockwiseButton',
            'viewControlsDivider1',
        ],
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

// add stamp annotation
// with random image from picsum.photos
const res = await fetch('https://picsum.photos/200');

const imageBlob = await res.blob();
const reader = new FileReader();
reader.onloadend = async () => {
const annot = new Annotations.StampAnnotation({
    PageNumber: 1,
    X: 200,
    Y: 200,
    Width: 120,
    Height: 80,
});

const base64data = reader.result;
await annot.setImageData(base64data); // Base64 URL or SVG

// rotate annotation
annot.Rotation = -90;
// flip height and width, because I don't know why
[annot.Height, annot.Width] = [annot.Width, annot.Height];

annotationManager.addAnnotation(annot);
annotationManager.redrawAnnotation(annot);
}
reader.readAsDataURL(imageBlob);

// await new Promise((resolve) => setTimeout(resolve, 5000)); // prevent timing issues

// // download the file with annotations
// const xfdfString = await annotationManager.exportAnnotations();
// const options = { xfdfString };
// const data = await doc.getFileData(options);
// const arr = new Uint8Array(data);
// const blob = new Blob([arr], { type: 'application/pdf' });

// const url = URL.createObjectURL(blob);
// window.open(url);