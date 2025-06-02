import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { basicSetup, EditorView } from 'codemirror';
import { css } from '@codemirror/lang-css';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags } from '@lezer/highlight';
import { WebshopCodeService } from '../../usecases/webshop/service/webshop-code.service';

@Component({
  selector: 'app-code-editor',
  imports: [],
  templateUrl: './code-editor.component.html',
  styleUrl: './code-editor.component.scss',
})
export class CodeEditorComponent implements AfterViewInit {
  @ViewChild('editor') editor: any;

  document: string = '.info-container {\n' +
    '   width: 800px; /* Absolute Breite */\n' +
    '   overflow: hidden; \n' +
    '   margin: 20px auto; \n' +
    '   padding: 20px;\n' +
    '}';

  constructor(private webshopCodeService: WebshopCodeService) {
  }

  ngAfterViewInit() {
    this.editor = new EditorView({
      doc: this.document,
      parent: document.getElementById('code-editor-container')!,
      extensions: [basicSetup,
        EditorView.theme({
            ".cm-gutter": {"backgroundColor": "#2C2C2C"},
            ".cm-content": {"color": "#F6F4E9"},
            ".cm-activeLine": {"backgroundColor": "#D9D9D940"},
            "&": {"max-height": "100%", "width": "100%", "flex": "1"},
            ".cm-scroller": {"max-height": "100%", "overflow": "auto"}
          }
        ),
        css(),
        syntaxHighlighting(HighlightStyle.define([
          {tag: tags.keyword, color: "#6AAB73"},
          {tag: tags.comment, color: "#7A7E85"},
          {tag: tags.number, color: "#2AACB8"},
          {tag: [tags.labelName, tags.className], color: "#D5B778"}
        ]))
      ],
    })
  }

  applyStyle(){
    this.webshopCodeService.updateCssText(this.editor.state.document);
    console.log(this.editor.state.doc.text.toString());
  }
}
