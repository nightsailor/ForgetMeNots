/* eslint-disable */

// My Starter JavaScript Template

// Journal Entry Form

const entryForm = document.querySelector(`#entryForm`);
const entryResultsSection = document.querySelector(`#entryResultsSection`);
const entryResultItem = document.querySelector(`.entryResultItem`);
const entryResultRow = document.querySelector(`.entryResultRow`);
const getEntryTitle = document.getElementsByClassName(`entry-text-title`);
const getEntryText = document.getElementsByClassName(`entry-text-box`);

function addEntryToDom(memories) {
  const heading = document.createElement(`h2`);
        heading.className = `heading-results`;
        heading.textContent = `Journal Entries`;
        entryResultRow.insertAdjacentElement(`beforebegin`, heading)
        
    for(let memory of memories ) {
        console.log(memory, memory.pub_date)
        const d = new Date( memory.pub_date );
        const month = new Array();
        month[0] = 'January';
        month[1] = 'February';
        month[2] = 'March';
        month[3] = 'April';
        month[4] = 'May';
        month[5] = 'June';
        month[6] = 'July';
        month[7] = 'August';
        month[8] = 'September';
        month[9] = 'October';
        month[10] = 'November';
        month[11] = 'December';
        const n = month[d.getMonth()];
        const day = d.getDay();
        const year = d.getFullYear();
        console.log(n, day, year)
        // Adding Div
        const entryDiv = document.createElement(`div`);
        entryDiv.className = `single-entry-div`;
        entryResultRow.appendChild(entryDiv);

        // Adding Div Element h3
        const entryHeading = document.createElement(`h3`);
        entryHeading.className = `single-entry-heading`;
        entryHeading.textContent = memory.title
        entryDiv.appendChild(entryHeading);

        // Adding Div Element Date

        const entryDate = document.createElement(`p`);
        entryDate.className = `single-entry-date`;
        // eslint-disable-next-line no-cond-assign
        // if ((getEntryTitle[0].value = getEntryTitle[0].value)) {
                entryDate.textContent = `Date Added: ${day} ${n} ${year}`;
                entryDiv.appendChild(entryDate);
        // }

        // Adding Div Element paragraph

        const entryParagraph = document.createElement(`p`);
        entryParagraph.className = `single-entry-text`;
        entryParagraph.textContent = memory.text
        entryDiv.appendChild(entryParagraph);
        getEntryText[0].value = ``;
    }
}

addEntryToDom(memories)