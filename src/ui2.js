export default {
  "modularComponents": {
    // "filePickerButton": {
    //   "dataElement": "filePickerButton",
    //   "title": "action.openFile",
    //   "label": "action.openFile",
    //   "type": "presetButton",
    //   "buttonType": "filePickerButton",
    //   "disabled": true
    // },
    // "downloadButton": {
    //   "dataElement": "downloadButton",
    //   "title": "action.download",
    //   "label": "action.download",
    //   "type": "presetButton",
    //   "buttonType": "downloadButton"
    // },
    // "saveAsButton": {
    //   "dataElement": "saveAsButton",
    //   "title": "saveModal.saveAs",
    //   "isActive": false,
    //   "label": "saveModal.saveAs",
    //   "type": "presetButton",
    //   "buttonType": "saveAsButton"
    // },
    // "printButton": {
    //   "dataElement": "printButton",
    //   "title": "action.print",
    //   "isActive": false,
    //   "label": "action.print",
    //   "type": "presetButton",
    //   "buttonType": "printButton"
    // },
    // "createPortfolioButton": {
    //   "dataElement": "createPortfolioButton",
    //   "title": "portfolio.createPDFPortfolio",
    //   "isActive": false,
    //   "label": "portfolio.createPDFPortfolio",
    //   "type": "presetButton",
    //   "buttonType": "createPortfolioButton",
    //   "disabled": true
    // },
    // "settingsButton": {
    //   "dataElement": "settingsButton",
    //   "title": "option.settings.settings",
    //   "isActive": false,
    //   "label": "option.settings.settings",
    //   "type": "presetButton",
    //   "buttonType": "settingsButton"
    // },
    // "divider-0.1": {
    //   "dataElement": "divider-0.1",
    //   "type": "divider"
    // },
    "view-controls": {
      "dataElement": "view-controls",
      "type": "viewControls",
      "title": "component.viewControls",
      "icon": "icon-header-page-manipulation-line"
    },
    "divider-0.3": {
      "dataElement": "divider-0.3",
      "type": "divider"
    },
    "zoom-container": {
      "dataElement": "zoom-container",
      "type": "zoom"
    },
    "divider-0.2": {
      "dataElement": "divider-0.2",
      "type": "divider"
    },
    "panToolButton": {
      "dataElement": "panToolButton",
      "type": "toolButton",
      "toolName": "Pan"
    },
    "annotationEditToolButton": {
      "dataElement": "annotationEditToolButton",
      "type": "toolButton",
      "toolName": "AnnotationEdit"
    },
    "groupedLeftHeaderButtons": {
      "dataElement": "groupedLeftHeaderButtons",
      "items": [
        "view-controls",
        "divider-0.3",
        "zoom-container",
        "divider-0.2",
        "panToolButton",
        "annotationEditToolButton"
      ],
      "type": "groupedItems",
      "grow": 1,
      "gap": 12,
      "alwaysVisible": true
    },
    "highlightToolButton": {
      "dataElement": "highlightToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreateTextHighlight"
    },
    "underlineToolButton": {
      "dataElement": "underlineToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreateTextUnderline"
    },
    "strikeoutToolButton": {
      "dataElement": "strikeoutToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreateTextStrikeout"
    },
    "squigglyToolButton": {
      "dataElement": "squigglyToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreateTextSquiggly"
    },
    "freeTextToolButton": {
      "dataElement": "freeTextToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreateFreeText"
    },
    "markInsertTextToolButton": {
      "dataElement": "markInsertTextToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreateMarkInsertText"
    },
    "markReplaceTextToolButton": {
      "dataElement": "markReplaceTextToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreateMarkReplaceText"
    },
    "freeHandToolButton": {
      "dataElement": "freeHandToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreateFreeHand"
    },
    "freeHandHighlightToolButton": {
      "dataElement": "freeHandHighlightToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreateFreeHandHighlight"
    },
    "stickyToolButton": {
      "dataElement": "stickyToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreateSticky"
    },
    "calloutToolButton": {
      "dataElement": "calloutToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreateCallout"
    },
    "divider-0.4": {
      "dataElement": "divider-0.4",
      "type": "divider"
    },
    "indexPanelListToggle": {
      "dataElement": "indexPanelListToggle",
      "title": "component.indexPanel",
      "type": "toggleButton",
      "img": "icon-index-panel-list",
      "toggleElement": "indexPanel"
    },
    "divider-0.5": {
      "dataElement": "divider-0.5",
      "type": "divider"
    },
    "undoButton": {
      "dataElement": "undoButton",
      "type": "presetButton",
      "buttonType": "undoButton"
    },
    "redoButton": {
      "dataElement": "redoButton",
      "type": "presetButton",
      "buttonType": "redoButton"
    },
    "toggleAccessibilityModeButton": {
      "dataElement": "toggleAccessibilityModePresetButton",
      "type": "presetButton",
      "buttonType": "toggleAccessibilityModeButton"
    },
    "eraserToolButton": {
      "dataElement": "eraserToolButton",
      "type": "toolButton",
      "toolName": "AnnotationEraserTool"
    },
    "defaultAnnotationUtilities": {
      "dataElement": "defaultAnnotationUtilities",
      "items": [
        "divider-0.5",
        "undoButton",
        "redoButton",
        "eraserToolButton"
      ],
      "type": "groupedItems",
      "grow": 0,
      "gap": 12,
      "alwaysVisible": false
    },
    // "annotateToolsGroupedItems": {
    //   "dataElement": "annotateToolsGroupedItems",
    //   "items": [
    //     "highlightToolButton",
    //     "underlineToolButton",
    //     "strikeoutToolButton",
    //     "squigglyToolButton",
    //     "freeHandToolButton",
    //     "freeHandHighlightToolButton",
    //     "freeTextToolButton",
    //     "markInsertTextToolButton",
    //     "markReplaceTextToolButton",
    //     "stickyToolButton",
    //     "calloutToolButton"
    //   ],
    //   "type": "groupedItems",
    //   "justifyContent": "center",
    //   "grow": 0,
    //   "gap": 12,
    //   "alwaysVisible": false
    // },
    // "annotateGroupedItems": {
    //   "dataElement": "annotateGroupedItems",
    //   "items": [
    //     "annotateToolsGroupedItems",
    //     "divider-0.4",
    //     "defaultAnnotationUtilities"
    //   ],
    //   "type": "groupedItems",
    //   "justifyContent": "center",
    //   "grow": 0,
    //   "gap": 12,
    //   "alwaysVisible": false
    // },
    "rectangleToolButton": {
      "dataElement": "rectangleToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreateRectangle"
    },
    "ellipseToolButton": {
      "dataElement": "ellipseToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreateEllipse"
    },
    "arcToolButton": {
      "dataElement": "arcToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreateArc"
    },
    "polygonToolButton": {
      "dataElement": "polygonToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreatePolygon"
    },
    "cloudToolButton": {
      "dataElement": "cloudToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreatePolygonCloud"
    },
    "lineToolButton": {
      "dataElement": "lineToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreateLine"
    },
    "polylineToolButton": {
      "dataElement": "polylineToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreatePolyline"
    },
    "arrowToolButton": {
      "dataElement": "arrowToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreateArrow"
    },
    "shapesToolsGroupedItems": {
      "dataElement": "shapesToolsGroupedItems",
      "items": [
        "rectangleToolButton",
        "ellipseToolButton",
        "arcToolButton",
        "polygonToolButton",
        "cloudToolButton",
        "lineToolButton",
        "polylineToolButton",
        "arrowToolButton"
      ],
      "type": "groupedItems",
      "grow": 0,
      "gap": 12,
      "alwaysVisible": false
    },
    // "shapesGroupedItems": {
    //   "dataElement": "shapesGroupedItems",
    //   "items": [
    //     "shapesToolsGroupedItems",
    //     "divider-0.4",
    //     "defaultAnnotationUtilities"
    //   ],
    //   "type": "groupedItems",
    //   "grow": 0,
    //   "gap": 12,
    //   "alwaysVisible": false
    // },
    "rubberStampToolButton": {
      "dataElement": "rubberStampToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreateRubberStamp"
    },
    "signatureCreateToolButton": {
      "dataElement": "signatureCreateToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreateSignature"
    },
    "fileAttachmentButton": {
      "dataElement": "fileAttachmentButton",
      "type": "toolButton",
      "toolName": "AnnotationCreateFileAttachment"
    },
    "stampToolButton": {
      "dataElement": "stampToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreateStamp"
    },
    "insertToolsGroupedItems": {
      "dataElement": "insertToolsGroupedItems",
      "items": [
        "rubberStampToolButton",
        "signatureCreateToolButton",
        "fileAttachmentButton",
        "stampToolButton"
      ],
      "type": "groupedItems",
      "grow": 0,
      "gap": 12,
      "alwaysVisible": false
    },
    // "insertGroupedItems": {
    //   "dataElement": "insertGroupedItems",
    //   "items": [
    //     "insertToolsGroupedItems",
    //     "divider-0.4",
    //     "defaultAnnotationUtilities"
    //   ],
    //   "type": "groupedItems",
    //   "grow": 0,
    //   "gap": 12,
    //   "alwaysVisible": false
    // },
    "redactionGroupedItems": {
      "dataElement": "redactionGroupedItems",
      "items": [
        "defaultAnnotationUtilities"
      ],
      "type": "groupedItems",
      "grow": 0,
      "gap": 12,
      "alwaysVisible": false
    },
    "distanceMeasurementToolButton": {
      "dataElement": "distanceMeasurementToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreateDistanceMeasurement"
    },
    "arcMeasurementToolButton": {
      "dataElement": "arcMeasurementToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreateArcMeasurement"
    },
    "perimeterMeasurementToolButton": {
      "dataElement": "perimeterMeasurementToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreatePerimeterMeasurement"
    },
    "areaMeasurementToolButton": {
      "dataElement": "areaMeasurementToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreateAreaMeasurement"
    },
    "ellipseMeasurementToolButton": {
      "dataElement": "ellipseMeasurementToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreateEllipseMeasurement"
    },
    "rectangularAreaMeasurementToolButton": {
      "dataElement": "rectangularAreaMeasurementToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreateRectangularAreaMeasurement"
    },
    "countMeasurementToolButton": {
      "dataElement": "countMeasurementToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreateCountMeasurement"
    },
    // "measureGroupedItems": {
    //   "dataElement": "measureGroupedItems",
    //   "items": [
    //     "distanceMeasurementToolButton",
    //     "arcMeasurementToolButton",
    //     "perimeterMeasurementToolButton",
    //     "areaMeasurementToolButton",
    //     "ellipseMeasurementToolButton",
    //     "rectangularAreaMeasurementToolButton",
    //     "countMeasurementToolButton",
    //     "divider-0.4",
    //     "defaultAnnotationUtilities"
    //   ],
    //   "type": "groupedItems",
    //   "grow": 0,
    //   "gap": 12,
    //   "alwaysVisible": false
    // },
    "cropToolButton": {
      "dataElement": "cropToolButton",
      "type": "toolButton",
      "toolName": "CropPage"
    },
    "snippingToolButton": {
      "dataElement": "snippingToolButton",
      "type": "toolButton",
      "toolName": "SnippingTool"
    },
    // "editGroupedItems": {
    //   "dataElement": "editGroupedItems",
    //   "items": [
    //     "cropToolButton",
    //     "snippingToolButton"
    //   ],
    //   "type": "groupedItems",
    //   "grow": 0,
    //   "gap": 12,
    //   "alwaysVisible": false
    // },
    "addParagraphToolGroupButton": {
      "dataElement": "addParagraphToolGroupButton",
      "type": "toolButton",
      "toolName": "AddParagraphTool",
      "disabled": true
    },
    "addImageContentToolGroupButton": {
      "dataElement": "addImageContentToolGroupButton",
      "type": "toolButton",
      "toolName": "AddImageContentTool",
      "disabled": true
    },
    "divider-0.6": {
      "dataElement": "divider-0.6",
      "type": "divider"
    },
    "contentEditButton": {
      "dataElement": "contentEditButton",
      "type": "presetButton",
      "buttonType": "contentEditButton",
      "disabled": true
    },
    // "contentEditGroupedItems": {
    //   "dataElement": "contentEditGroupedItems",
    //   "items": [
    //     "addParagraphToolGroupButton",
    //     "addImageContentToolGroupButton",
    //     "divider-0.6",
    //     "contentEditButton"
    //   ],
    //   "type": "groupedItems",
    //   "grow": 0,
    //   "gap": 12,
    //   "alwaysVisible": false
    // },
    "crossStampToolButton": {
      "dataElement": "crossStampToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreateCrossStamp"
    },
    "checkStampToolButton": {
      "dataElement": "checkStampToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreateCheckStamp"
    },
    "dotStampToolButton": {
      "dataElement": "dotStampToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreateDotStamp"
    },
    "calendarToolButton": {
      "dataElement": "calendarToolButton",
      "type": "toolButton",
      "toolName": "AnnotationCreateDateFreeText"
    },
    // "fillAndSignGroupedItems": {
    //   "dataElement": "fillAndSignGroupedItems",
    //   "items": [
    //     "signatureCreateToolButton",
    //     "freeTextToolButton",
    //     "crossStampToolButton",
    //     "checkStampToolButton",
    //     "dotStampToolButton",
    //     "rubberStampToolButton",
    //     "calendarToolButton",
    //     "divider-0.4",
    //     "defaultAnnotationUtilities"
    //   ],
    //   "type": "groupedItems",
    //   "grow": 0,
    //   "gap": 12,
    //   "alwaysVisible": false
    // },
    "signatureFieldButton": {
      "dataElement": "signatureFieldButton",
      "type": "toolButton",
      "toolName": "SignatureFormFieldCreateTool"
    },
    "textFieldButton": {
      "dataElement": "textFieldButton",
      "type": "toolButton",
      "toolName": "TextFormFieldCreateTool"
    },
    "checkboxFieldButton": {
      "dataElement": "checkboxFieldButton",
      "type": "toolButton",
      "toolName": "CheckBoxFormFieldCreateTool"
    },
    "radioFieldButton": {
      "dataElement": "radioFieldButton",
      "type": "toolButton",
      "toolName": "RadioButtonFormFieldCreateTool"
    },
    "listBoxFieldButton": {
      "dataElement": "listBoxFieldButton",
      "type": "toolButton",
      "toolName": "ListBoxFormFieldCreateTool"
    },
    "comboBoxFieldButton": {
      "dataElement": "comboBoxFieldButton",
      "type": "toolButton",
      "toolName": "ComboBoxFormFieldCreateTool"
    },
    "divider-0.7": {
      "dataElement": "divider-0.7",
      "type": "divider"
    },
    "formFieldEditButton": {
      "dataElement": "formFieldEditButton",
      "type": "presetButton",
      "buttonType": "formFieldEditButton"
    },
    "divider-0.8": {
      "dataElement": "divider-0.8",
      "type": "divider"
    },
    "formsToolsGroupedItems": {
      "dataElement": "formsToolsGroupedItems",
      "items": [
        "signatureFieldButton",
        "textFieldButton",
        "freeTextToolButton",
        "checkboxFieldButton",
        "radioFieldButton",
        "listBoxFieldButton",
        "comboBoxFieldButton",
        "divider-0.7",
        "formFieldEditButton"
      ],
      "type": "groupedItems",
      "grow": 0,
      "gap": 12,
      "alwaysVisible": false
    },
    // "formsGroupedItems": {
    //   "dataElement": "formsGroupedItems",
    //   "items": [
    //     "formsToolsGroupedItems",
    //     "divider-0.8",
    //     "indexPanelListToggle"
    //   ],
    //   "type": "groupedItems",
    //   "grow": 0,
    //   "gap": 12,
    //   "alwaysVisible": false
    // },
    "page-controls-container": {
      "dataElement": "page-controls-container",
      "type": "pageControls",
      "title": "component.pageControls",
      "icon": "icon-page-controls"
    },
    "newDocumentButton": {
      "dataElement": "newDocumentButton",
      "presetDataElement": "newDocumentPresetButton",
      "label": "action.newDocument",
      "title": "action.newDocument",
      "isActive": false,
      "type": "presetButton",
      "buttonType": "newDocumentButton"
    },
    "fullscreenButton": {
      "dataElement": "fullscreenButton",
      "presetDataElement": "fullscreenPresetButton",
      "label": "action.enterFullscreen",
      "title": "action.enterFullscreen",
      "type": "presetButton",
      "buttonType": "fullscreenButton"
    }
  },
  "modularHeaders": {
    "default-top-header": {
      "dataElement": "default-top-header",
      "placement": "top",
      "grow": 0,
      "gap": 12,
      "position": "start",
      "float": false,
      "stroke": true,
      "dimension": {
        "paddingTop": 8,
        "paddingBottom": 8,
        "borderWidth": 1
      },
      "style": {},
      "items": [
        "groupedLeftHeaderButtons"
      ]
    },
    // "tools-header": {
    //   "dataElement": "tools-header",
    //   "placement": "top",
    //   "justifyContent": "center",
    //   "grow": 0,
    //   "gap": 12,
    //   "position": "end",
    //   "float": false,
    //   "stroke": true,
    //   "dimension": {
    //     "paddingTop": 8,
    //     "paddingBottom": 8,
    //     "borderWidth": 1
    //   },
    //   "style": {},
    //   "items": [
    //     "annotateGroupedItems",
    //     "shapesGroupedItems",
    //     "insertGroupedItems",
    //     "measureGroupedItems",
    //     "editGroupedItems",
    //     "contentEditGroupedItems",
    //     "fillAndSignGroupedItems",
    //     "formsGroupedItems"
    //   ]
    // },
    "page-nav-floating-header": {
      "dataElement": "page-nav-floating-header",
      "placement": "bottom",
      "grow": 0,
      "gap": 12,
      "position": "center",
      "opacityMode": "dynamic",
      "opacity": "none",
      "float": true,
      "stroke": true,
      "dimension": {
        "paddingTop": 8,
        "paddingBottom": 8,
        "borderWidth": 1
      },
      "style": {
        "background": "var(--gray-1)",
        "padding": "8px",
        "borderStyle": "solid",
        "borderWidth": 1,
        "borderColor": "var(--gray-5)"
      },
      "items": [
        "page-controls-container"
      ]
    }
  },
  "panels": {
    // "comparePanel": {
    //   "dataElement": "comparePanel",
    //   "render": "changeListPanel",
    //   "location": "end"
    // },
    // "thumbnailsPanel": {
    //   "dataElement": "thumbnailsPanel",
    //   "render": "thumbnailsPanel",
    //   "location": "start"
    // },
    // "outlinesPanel": {
    //   "dataElement": "outlinesPanel",
    //   "render": "outlinesPanel",
    //   "location": "start"
    // },
    // "bookmarksPanel": {
    //   "dataElement": "bookmarksPanel",
    //   "render": "bookmarksPanel",
    //   "location": "start"
    // },
    // "formFieldPanel": {
    //   "dataElement": "formFieldPanel",
    //   "render": "formFieldPanel",
    //   "location": "end"
    // },
    // "indexPanel": {
    //   "dataElement": "indexPanel",
    //   "render": "indexPanel",
    //   "location": "end"
    // },
    // "layersPanel": {
    //   "dataElement": "layersPanel",
    //   "render": "layersPanel",
    //   "location": "start"
    // },
    // "signatureListPanel": {
    //   "dataElement": "signatureListPanel",
    //   "render": "signatureListPanel",
    //   "location": "start"
    // },
    // "fileAttachmentPanel": {
    //   "dataElement": "fileAttachmentPanel",
    //   "render": "fileAttachmentPanel",
    //   "location": "start"
    // },
    // "rubberStampPanel": {
    //   "dataElement": "rubberStampPanel",
    //   "render": "rubberStampPanel",
    //   "location": "start"
    // },
    // "textEditingPanel": {
    //   "dataElement": "textEditingPanel",
    //   "render": "textEditingPanel",
    //   "location": "end"
    // },
    // "signaturePanel": {
    //   "dataElement": "signaturePanel",
    //   "render": "signaturePanel",
    //   "location": "start"
    // },
    // "portfolioPanel": {
    //   "dataElement": "portfolioPanel",
    //   "render": "portfolioPanel",
    //   "location": "start",
    //   "disabled": true
    // },
    // "notesPanel": {
    //   "dataElement": "notesPanel",
    //   "render": "notesPanel",
    //   "location": "end"
    // },
    // "redactionPanel": {
    //   "dataElement": "redactionPanel",
    //   "render": "redactionPanel",
    //   "location": "end",
    //   "disabled": true
    // }
  },
  "flyouts": {},
  "popups": {
    "annotationPopup": [
      {
        "dataElement": "viewFileButton"
      },
      {
        "dataElement": "annotationCommentButton"
      },
      {
        "dataElement": "annotationStyleEditButton"
      },
      {
        "dataElement": "annotationDateEditButton"
      },
      {
        "dataElement": "annotationRedactButton"
      },
      {
        "dataElement": "annotationCropButton"
      },
      {
        "dataElement": "annotationContentEditButton"
      },
      {
        "dataElement": "annotationClearSignatureButton"
      },
      {
        "dataElement": "annotationGroupButton"
      },
      {
        "dataElement": "annotationUngroupButton"
      },
      {
        "dataElement": "formFieldEditButton"
      },
      {
        "dataElement": "calibratePopupButton"
      },
      {
        "dataElement": "linkButton"
      },
      {
        "dataElement": "fileAttachmentDownload"
      },
      {
        "dataElement": "annotationDeleteButton"
      },
      {
        "dataElement": "shortCutKeysFor3D"
      },
      {
        "dataElement": "playSoundButton"
      },
      {
        "dataElement": "openAlignmentButton"
      }
    ],
    "textPopup": [
      {
        "dataElement": "copyTextButton"
      },
      {
        "dataElement": "textHighlightToolButton"
      },
      {
        "dataElement": "textUnderlineToolButton"
      },
      {
        "dataElement": "textSquigglyToolButton"
      },
      {
        "dataElement": "textStrikeoutToolButton"
      },
      {
        "dataElement": "textRedactToolButton"
      },
      {
        "dataElement": "linkButton"
      }
    ],
    "contextMenuPopup": [
      {
        "dataElement": "panToolButton"
      },
      {
        "dataElement": "stickyToolButton"
      },
      {
        "dataElement": "highlightToolButton"
      },
      {
        "dataElement": "freeHandToolButton"
      },
      {
        "dataElement": "freeHandHighlightToolButton"
      },
      {
        "dataElement": "freeTextToolButton"
      },
      {
        "dataElement": "markInsertTextToolButton"
      },
      {
        "dataElement": "markReplaceTextToolButton"
      }
    ]
  }
}