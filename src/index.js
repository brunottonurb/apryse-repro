import WebViewer from '@pdftron/webviewer'
import ui from './ui2';

const element = document.getElementById('viewer');

const webViewerInstance = await WebViewer.Iframe(
    {
        path: '/lib/webviewer',
        // licenseKey,
        fullAPI: true,
        initialDoc: 'https://apryse.s3.amazonaws.com/public/files/samples/WebviewerDemoDoc.pdf',
    },
    element,
);
const { Core: { annotationManager, documentViewer, Annotations }, UI } = webViewerInstance;
// // const modularHeaders = UI.getModularHeaderList();
// // console.log(modularHeaders[0].getItems());
// // UI.setModularHeaders([modularHeaders[0]]);

// // const viewControls = new UI.Components.ViewControls();
// // const zoom = new UI.Components.Zoom();
// // const defaultHeader = UI.getModularHeader('default-top-header');
// // defaultHeader.setItems([viewControls, zoom]);
// const viewControls = new UI.Components.ViewControls();
// // const zoom = new UI.Components.Zoom();
// const topHeader = new UI.Components.ModularHeader({
//     dataElement: 'default-top-header',
//     placement: 'top',
//     // grow: 0,
//     // gap: 12,
//     // position: 'start',
//     // stroke: true,
//     // dimension: {
//     //   paddingTop: 8,
//     //   paddingBottom: 8,
//     //   borderWidth: 1
//     // },
//     // style: {},
//     items: [
//         viewControls,
//         // zoom,
//     ]
//   });

//   // Set the modular header in the UI
// UI.setModularHeaders([topHeader]);
// UI.enableViewOnlyMode();
// console.log(UI.exportModularComponents());
UI.importModularComponents(ui);

// // wait for document to be loaded
// await new Promise((resolve) => {
//     documentViewer.addEventListener('documentLoaded', resolve);
// });

// await new Promise((resolve) => setTimeout(resolve, 5000)); // prevent timing issues, otherwise the render is not correct, page is rotate, but dimensions/coordinates are not updated

// // rotate first page counter-clockwise
// const doc = documentViewer.getDocument();
// await doc.rotatePages([1], -1);

// await new Promise((resolve) => setTimeout(resolve, 5000)); // prevent timing issues, otherwise the render is not correct, page is rotate, but dimensions/coordinates are not updated

// // add stamp annotation
// // with random image from picsum.photos
// const res = await fetch('https://picsum.photos/200');

// const imageBlob = await res.blob();
// const reader = new FileReader();
// reader.onloadend = async () => {
// const annot = new Annotations.StampAnnotation({
//     PageNumber: 1,
//     X: 200,
//     Y: 200,
//     Width: 120,
//     Height: 80,
// });

// const base64data = reader.result;
// await annot.setImageData(base64data); // Base64 URL or SVG

// // rotate annotation
// annot.Rotation = -90;
// // flip height and width, because I don't know why
// [annot.Height, annot.Width] = [annot.Width, annot.Height];

// annotationManager.addAnnotation(annot);
// annotationManager.redrawAnnotation(annot);
// }
// reader.readAsDataURL(imageBlob);

// await new Promise((resolve) => setTimeout(resolve, 5000)); // prevent timing issues

// // download the file with annotations
// const xfdfString = await annotationManager.exportAnnotations();
// const options = { xfdfString };
// const data = await doc.getFileData(options);
// const arr = new Uint8Array(data);
// const blob = new Blob([arr], { type: 'application/pdf' });

// const url = URL.createObjectURL(blob);
// window.open(url);