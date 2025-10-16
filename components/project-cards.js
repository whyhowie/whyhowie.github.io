const fallbackColors = [
    "rgba(200, 0, 0, 0.5)",
    "rgba(0, 200, 0, 0.5)",
    "rgba(0, 0, 200, 0.5)",
    "rgba(200, 200, 0, 0.5)",
    "rgba(200, 0, 200, 0.5)",
    "rgba(0, 200, 200, 0.5)"
];

// Shuffled queue of colors
let colorQueue = [];

function shuffleArray(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function getRandomColor() {
    if (colorQueue.length === 0) {
        colorQueue = shuffleArray(fallbackColors);
    }
    return colorQueue.pop();
}



// Gallery behavior
function openDetails(project) {
    const $details = $('.project-details-container');
    $.get('projects/project-details.html', function (templateHtml) {
        $details.html(templateHtml); // insert template
        

        $details.find('.project-details-title').text(project.title);
        $details.find('.project-details-description').html(project.description);

        $details.fadeIn(100);   // Show the details

        // Close button
        $details.find('.project-details-close').off('click').on('click', () => {
            $details.fadeOut(100);
        });

        // Click outside to close
        $details.off('click').on('click', e => {
            if ($(e.target).is('.project-details')) {
                $details.fadeOut(100);
            }
        });
    });
}







// Main entrypoint for the cards
$.get('projects/project-template.html', function (templateHtml) {
    const $template = $(templateHtml);

    projects.forEach(project => {
        const $card = $template.clone();
        $card.find('.project-card-image').attr('src', project.image);
        $card.find('.project-card-title').text(project.title);
        $card.find('.project-card-year').text(project.year);
        $card.find('.project-card-summary').text(project.summary);

        // Determine shadow color
        const shadowColor = project.color || getRandomColor();
        project.color = shadowColor;
        $card.css('filter', `drop-shadow(1rem 1rem 0 ${shadowColor})`);


        $card.on('click', () => openDetails(project));
        $('#projects-container').append($card);
    });
});



