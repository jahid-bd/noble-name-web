import JoditEditor from 'jodit-react';

const copyStringToClipboard = function (str: any) {
  let el: any = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style = { position: 'absolute', left: '-9999px' };
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

const facilityMergeFields = [
  'FacilityNumber',
  'FacilityName',
  'Address',
  'MapCategory',
  'Latitude',
  'Longitude',
  'ReceivingPlant',
  'TrunkLine',
  'SiteElevation',
];

const inspectionMergeFields = ['InspectionCompleteDate', 'InspectionEventType'];

const createOptionGroupElement = (mergeFields: any, optionGrouplabel: any) => {
  let optionGroupElement = document.createElement('optgroup');
  optionGroupElement.setAttribute('label', optionGrouplabel);
  for (let index = 0; index < mergeFields.length; index++) {
    let optionElement = document.createElement('option');
    optionElement.setAttribute('class', 'merge-field-select-option');
    optionElement.setAttribute('value', mergeFields[index]);
    optionElement.text = mergeFields[index];
    optionGroupElement.appendChild(optionElement);
  }
  return optionGroupElement;
};

const buttons = [
  'undo',
  'redo',
  '|',
  'bold',
  'strikethrough',
  'underline',
  'italic',
  '|',
  'superscript',
  'subscript',
  '|',
  'align',
  '|',
  'ul',
  'ol',
  'outdent',
  'indent',
  '|',
  'font',
  'fontsize',
  'brush',
  'paragraph',
  '|',
  'image',
  'link',
  'table',
  '|',
  'hr',
  'eraser',
  'copyformat',
  '|',
  'fullsize',
  'selectall',
  'print',
  '|',
  'source',
  '|',
  {
    name: 'insertMergeField',
    tooltip: 'Insert Merge Field',
    // iconURL: 'images/merge.png',
    popup: (editor: any, current: any, self: any, close: any) => {
      function onSelected(e: any) {
        let mergeField = e.target.value;

        if (mergeField) {
          editor.selection.insertNode(
            editor.create.inside.fromHTML('{{' + mergeField + '}}')
          );
        }
      }
      let divElement = editor.create.div('merge-field-popup');

      let labelElement: any = document.createElement('label');
      labelElement.setAttribute('class', 'merge-field-label');
      labelElement.text = 'Merge field: ';
      divElement.appendChild(labelElement);

      let selectElement = document.createElement('select');
      selectElement.setAttribute('class', 'merge-field-select');
      selectElement.appendChild(
        createOptionGroupElement(facilityMergeFields, 'Facility')
      );
      selectElement.appendChild(
        createOptionGroupElement(inspectionMergeFields, 'Inspection')
      );
      selectElement.onchange = onSelected;
      divElement.appendChild(selectElement);

      return divElement;
    },
  },
  {
    name: 'copyContent',
    tooltip: 'Copy HTML to Clipboard',
    // iconURL: 'images/copy.png',
    exec: function (editor: any) {
      let html = editor.value;
      copyStringToClipboard(html);
    },
  },
];

const editorConfig = {
  readonly: false,
  toolbar: true,
  spellcheck: true,
  language: 'en',
  toolbarButtonSize: 'medium',
  toolbarAdaptive: false,
  showCharsCounter: true,
  showWordsCounter: true,
  showXPathInStatusbar: false,
  askBeforePasteHTML: true,
  askBeforePasteFromWord: true,
  //defaultActionOnPaste: "insert_clear_html",
  buttons: buttons,
  // uploader: {
  //   insertImageAsBase64URI: true,
  // },
  width: '100%',
  height: 842,
};

const GlobalTextEditor = ({
  label,
  error,
  content,
  setContent,
}: {
  label: string;
  error: string;
  content: any;
  setContent: (value: any) => void;
}) => {
  return (
    <div className="w-full">
      <label className="font-medium text-sm text-text-secondary pb-[6px] block">
        {label}
      </label>

      <JoditEditor
        value={content}
        config={editorConfig as any}
        onChange={(value: any) => setContent(value)}
      />

      {error ? <p className="text-sm text-red-500 pt-[6px]">{error}</p> : null}
    </div>
  );
};

export default GlobalTextEditor;
