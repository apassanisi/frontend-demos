(() => {
  function accordion($rootEl, { sections }) {
    function attachEvents() {
      $rootEl.addEventListener('click', (event) => {
        const target = event.target;
        if (
          target.tagName !== 'BUTTON' ||
          !target.classList.contains('accordion-item-title')
        ) {
          return;
        }

        const $icon = target.querySelector('.accordion-icon');
        $icon.classList.toggle('accordion-icon--rotated');

        const $accordionContents = target.nextSibling;
        $accordionContents.hidden = !$accordionContents.hidden;
      });
    }

    function init() {

      // Create a document fragment
      const $accordionSections = document.createDocumentFragment();

      // Loop through section arguments
      sections.forEach(({ value, title, contents }) => {
        const $accordionSection = document.createElement('div');

        // Button
        const $accordionTitleBtn = document.createElement('button');
        $accordionTitleBtn.value = value;
        $accordionTitleBtn.classList.add('accordion-item-title');

        // Icon
        const $accordionIcon = document.createElement('span');
        $accordionIcon.classList.add('accordion-icon');
        $accordionIcon.setAttribute('aria-hidden', 'true');
        $accordionTitleBtn.append(title, $accordionIcon);

        // Content
        const $accordionSectionContents = document.createElement('p');
        $accordionSectionContents.classList.add('accordion-item-contents');
        $accordionSectionContents.hidden = true;
        $accordionSectionContents.textContent = contents;

        // Append elements to accordion
        $accordionSection.append(
          $accordionTitleBtn,
          $accordionSectionContents
        );

        // Append accordion to document fragment 
        $accordionSections.append($accordionSection);
      });

      // Append document fragment to root
      $rootEl.appendChild($accordionSections);
    }

    init();
    attachEvents();
  }

  accordion(document.getElementById('accordion'), {
    sections: [
      {
        value: 'html',
        title: 'HTML',
        contents:
          'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
      },
      {
        value: 'css',
        title: 'CSS',
        contents:
          'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
      },
      {
        value: 'javascript',
        title: 'JavaScript',
        contents:
          'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
      },
    ],
  });
})();
