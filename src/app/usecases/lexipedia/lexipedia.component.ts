import { Component, ElementRef, input, OnChanges, OnDestroy, Renderer2, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lexipedia',
  imports: [],
  templateUrl: './lexipedia.component.html',
  styleUrl: './lexipedia.component.scss'
})
export class LexipediaComponent implements OnChanges, OnDestroy {

  images = ['assets/distraction_elements/concentrate.svg',
    'assets/distraction_elements/cookies.svg',
    'assets/distraction_elements/eat.svg',
    'assets/distraction_elements/sound.svg',
    'assets/distraction_elements/stove.svg',
    'assets/distraction_elements/laundry.svg'
  ];

  imageElements: HTMLElement[] = [];

  isLRSSimulationActive = input<boolean>(false);
  isConcentrationSimulationActive = input<boolean>(false);

  text: string = 'Barrierefreiheit im Web bedeutet, dass digitale Inhalte und Anwendungen so gestaltet sind, dass sie für alle\n' +
    'Menschen, einschließlich Menschen mit Behinderungen, zugänglich sind. Dies umfasst visuelle, auditive, motorische\n' +
    'und kognitive Einschränkungen. Eine barrierefreie Website ermöglicht beispielsweise die Nutzung von Screenreadern\n' +
    'für blinde oder sehbehinderte Menschen, bietet Untertitel für gehörlose Nutzer oder sorgt für eine einfache\n' +
    'Navigation ohne Maus für motorisch eingeschränkte Personen.\n' +
    '\n' +
    'Um Barrierefreiheit zu gewährleisten, gibt es internationale Standards wie die Web Content Accessibility Guidelines\n' +
    '(WCAG). Diese geben Empfehlungen für die Gestaltung von Webseiten, etwa durch ausreichende Farbkontraste,\n' +
    'verständliche Texte und eine logische Struktur. Auch semantisches HTML und alternative Texte für Bilder tragen dazu\n' +
    'bei, dass Inhalte besser erfasst werden können. Entwickler und Designer sollten von Anfang an darauf achten, diese\n' +
    'Standards umzusetzen, um eine inklusive Nutzung zu ermöglichen.\n' +
    '\n' +
    'Neben der sozialen Verantwortung gibt es auch rechtliche Anforderungen. In vielen Ländern, darunter Deutschland mit\n' +
    'dem Barrierefreiheitsstärkungsgesetz, sind öffentliche und zunehmend auch private digitale Angebote verpflichtet,\n' +
    'barrierefrei zu sein. Unternehmen profitieren zudem wirtschaftlich davon, wenn sie ihre Reichweite durch zugängliche\n' +
    'Angebote erweitern. Eine barrierefreie Website verbessert nicht nur die Nutzerfreundlichkeit für Menschen mit\n' +
    'Behinderungen, sondern auch für ältere Menschen und Nutzer mit temporären Einschränkungen wie einer verletzten Hand\n' +
    'oder schlechten Lichtverhältnissen.\n';

  randomizedSpacesText = '';

  @ViewChild('lexipediaContainer', {static: true}) containerRef!: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isLRSSimulationActive']?.currentValue) {
      this.randomizeSpacePositions();
    }
    if (changes['isConcentrationSimulationActive']?.currentValue) {
      this.startDistractionSimulation();
    } else if (changes['isConcentrationSimulationActive']?.previousValue) {
      this.stopSimulation();
    }
  }

  randomizeSpacePositions() {
    const lines = this.text.split('\n');
    const randomizedLines = lines.map(line => {
      const textWithoutSpaces = line.replace(/\s+/g, '');
      const spaceCount = (line.match(/\s/g) || []).length;
      const randomizedPositions = Array.from({length: spaceCount}, () =>
        Math.floor(Math.random() * (textWithoutSpaces.length + 1))
      ).sort((a, b) => a - b);

      let result = '';
      let currentIndex = 0;

      for (let i = 0; i < textWithoutSpaces.length; i++) {
        if (randomizedPositions.includes(currentIndex)) {
          result += ' ';
        }
        result += textWithoutSpaces[i];
        currentIndex++;
      }

      while (randomizedPositions.includes(currentIndex)) {
        result += ' ';
        currentIndex++;
      }

      return result;
    });

    this.randomizedSpacesText = randomizedLines.join('\n');
  }

  startDistractionSimulation(): void {
    // Erstelle alle 1 Sekunde ein neues Bild
    const interval = setInterval(() => {
      if (!this.isConcentrationSimulationActive()) {
        clearInterval(interval);
        return;
      }

      this.createDistractionImage();
    }, 2000);
  }

  stopSimulation(): void {
    // Entferne alle Bilder
    this.imageElements.forEach(image => {
      this.renderer.removeChild(document.body, image);
    });
    this.imageElements = [];
  }

  private createDistractionImage(): void {
    // Wähle ein zufälliges Bild aus der Liste
    const randomImageUrl = this.images[Math.floor(Math.random() * this.images.length)];

    // Erstelle ein neues Bild-Element
    const img = this.renderer.createElement('img');
    this.renderer.setAttribute(img, 'src', randomImageUrl);
    this.renderer.addClass(img, 'distraction-image');

    // Berechne die Größe des Containers
    const container = this.containerRef.nativeElement;
    const containerRect = container.getBoundingClientRect(); // Exakte Position und Größe des Containers

    const randomX = Math.random() * (containerRect.width);
    const randomY = Math.random() * (containerRect.height);
    this.renderer.setStyle(img, 'left', `${randomX}px`);
    this.renderer.setStyle(img, 'top', `${randomY}px`);

    // Füge das Bild zum Dokument hinzu
    this.renderer.appendChild(document.body, img);
    this.imageElements.push(img);

    // Entferne das Bild nach 5 Sekunden
    setTimeout(() => {
      this.renderer.removeChild(document.body, img);
      this.imageElements = this.imageElements.filter(el => el !== img);
    }, 5000);
  }

  ngOnDestroy() {
    this.stopSimulation();
  }

}
