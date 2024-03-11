// document.addEventListener('DOMContentLoaded', function() {
//     const model = new VampireModel();
//     const view = new VampireView();
//     const controller = new VampireController(model, view);
// });

// app.js
import { isVampire } from './vampiremodel.js';

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('classmateForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Extract values from form
        const shadow = document.querySelector('[name="shadow"]').value;
        const pale = document.querySelector('[name="pale"]').value;
        const garlic = document.querySelector('[name="garlic"]').value;
        
        // Determine if vampire
        const vampire = isVampire(shadow, pale, garlic);
        
        // Update chart
        updateChart(vampire);
    });
});

function updateChart(vampire) {
    // Use Chart.js or similar to update the chart based on the vampire boolean
    // This is a placeholder for chart updating logic
}