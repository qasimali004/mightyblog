import SunEditor from "suneditor-react";

export default function Editor({content,setContent}) {
  return (
    <>
      <SunEditor
        defaultValue={content}
        onChange={(e) => setContent(e)}
        setOptions={{
          height: 320,
          buttonList: [
            ["undo", "redo"],
            ["font", "fontSize", "formatBlock"],
            ["paragraphStyle", "blockquote"],
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript",
            ],
            ["fontColor", "hiliteColor", "textStyle"],
            ["removeFormat"],
            "/", // Line break
            ["outdent", "indent"],
            ["align", "horizontalRule", "list", "lineHeight"],
            ["table", "link", "image", "video", "audio" /** ,'math' */], // You must add the 'katex' library at options to use the 'math' plugin. // You must add the "imageGalleryUrl".
            /** ['imageGallery'] */ ["fullScreen", "showBlocks", "codeView"],
            ["preview", "print"],
          ],
        }}
      />
    </>
  );
}
