import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { basicSetup, EditorView } from 'codemirror';
import { css } from '@codemirror/lang-css';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags } from '@lezer/highlight';
import { WebshopCodeService } from '../../usecases/webshop/service/webshop-code.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-code-editor',
  imports: [
    NgIf
  ],
  templateUrl: './code-editor.component.html',
  styleUrl: './code-editor.component.scss',
})
export class CodeEditorComponent implements AfterViewInit {
  @ViewChild('editor') editor: any;

  explanationText: string = 'In dieser Lektion schauen wir uns den Stellenwert der Schriftgröße an. Auf der ' +
    'Webseite ist der aus der Einführungslektion bekannte Webshop dargestellt, wie eine Person mit starker ' +
    'Weitsichtigkeit ihn wahrnehmen würde. Die spezielle visuelle Einschränkung kannst du über den Dropdown-Button ' +
    'anpassen. \n' +
    'Versuch nun zunächst den hinzugefügten Text zu lesen. Ganz schön schwierig oder? Wie sieht es mit vergrößern aus ' +
    '(Die Textgröße kannst du über den zusätzlichen Input verändern)? Die Webseite wurde so gebaut, dass automatisches ' +
    'Vergrößern keine Auswirkungen auf die Schriftgröße hat. Das ist natürlich schlecht für Personen, die Schwierigkeiten haben, kleinere Texte wahrzunehmen.\n' +
    '\n' +
    'Versuch die CSS-Klasse so anzupassen, dass der Text beim Vergrößern lesbar ist und auch alle Informationen sichtbar sind. \n' +
    'Hinweis: Relative Größen wie Prozentangaben, em, oder auch die named Schriftgrößen sind der richtige Weg. ';

  displayableText: string = this.explanationText;

  maxLength: number = 200;
  showToggleButton = true;
  isExpanded = true;

  document: string = '.label-text{\n' +
    'font-size: 16px;\n' +
    '}\n' +
    '\n' +
    '.navbar-text{\n' +
    'font-size: 16px; \n' +
    '}\n';

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

  applyStyle() {
    this.webshopCodeService.updateCssText(this.editor.state.doc.text.toString().replace(/,/g, '\n'));
  }

  toggleText(): void {
    this.isExpanded = !this.isExpanded;
    if (this.isExpanded) {
      this.displayableText = this.explanationText;
    } else {
      this.displayableText = this.explanationText.substring(0, this.maxLength) + '...';
    }
  }
}
