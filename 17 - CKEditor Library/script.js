let myEditorText = null;
let getDataBtn = document.querySelector('.getDataBtn');

const {
  ClassicEditor,
  Essentials,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Subscript,
  Superscript,
  Code,
  Paragraph,
  Heading,
  Font,
  FontColor,
  FontBackgroundColor,
  Link,
  List,
  TodoList,
  BlockQuote,
  CodeBlock,
  Alignment,
  Table,
  TableToolbar,
  Image,
  ImageToolbar,
  ImageCaption,
  ImageStyle,
  ImageResize,
  ImageUpload,
  Base64UploadAdapter,
} = CKEDITOR;

const { FormatPainter } = CKEDITOR_PREMIUM_FEATURES;

ClassicEditor.create(document.querySelector("#editor"), {
  licenseKey: "eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NTQ0MzgzOTksImp0aSI6IjIxNGQwNWY4LWMxNzQtNGZiOC05YzgxLTcyZTZkZDY0NmEzYyIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6ImM2NmNkOGQxIn0.bHNAZI0hteytZQLEBtr7_nLxkk4HkwWfvKn0fu55I58-4_3mle-igD-MPjEY20C3D5-6maPJerNiTJhBwDdTqw",

  plugins: [
    Essentials,
    Paragraph,
    Heading,
    Font,
    FontColor,
    FontBackgroundColor,
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Subscript,
    Superscript,
    Code,
    CodeBlock,
    Link,
    List,
    TodoList,
    BlockQuote,
    Alignment,
    Table,
    TableToolbar,
    Image,
    ImageToolbar,
    ImageCaption,
    ImageStyle,
    ImageResize,
    ImageUpload,
    Base64UploadAdapter,
    FormatPainter,
  ],

  toolbar: {
    items: [
      "undo",
      "redo",
      "|",
      "heading",
      "|",
      "fontFamily",
      "fontSize",
      "fontColor",
      "fontBackgroundColor",
      "|",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "subscript",
      "superscript",
      "code",
      "formatPainter",
      "|",
      "link",
      "blockQuote",
      "codeBlock",
      "|",
      "alignment",
      "|",
      "bulletedList",
      "numberedList",
      "todoList",
      "outdent",
      "indent",
      "|",
      "insertTable",
      "uploadImage",
    ],
    shouldNotGroupWhenFull: true,
  },

  image: {
    toolbar: [
      "imageTextAlternative",
      "toggleImageCaption",
      "imageStyle:inline",
      "imageStyle:block",
      "imageStyle:side",
    ],
    styles: ["inline", "block", "side"],
    resizeOptions: [
      {
        name: "resizeImage:original",
        label: "Original",
        value: null,
      },
      {
        name: "resizeImage:50",
        label: "50%",
        value: "50",
      },
      {
        name: "resizeImage:75",
        label: "75%",
        value: "75",
      },
    ],
  },

  table: {
    contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
  },
})
  .then((editor) => {
    console.log("📝 Editor for writing articles loaded successfully!", editor);
    myEditorText = editor;
  })
  .catch((error) => {
    console.error("❌ Error loading CKEditor:", error);
  });

getDataBtn.addEventListener('click', () => {
  const editorData = myEditorText.getData('');
  console.log("📝 Editor data:", editorData);
});