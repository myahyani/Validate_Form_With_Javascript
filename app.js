// Identification
// Nom : YAHYANI
// Prénom : MOHAMED
// Code permanent : YAHM14059203

window.onload = function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        // validation
        var q1 = document.getElementById("q1");
        q1.classList.remove("err");
        var q2 = document.getElementById("q2");
        q2.classList.remove("err");
        var q3 = document.getElementById("q3");
        q3.classList.remove("err");
        var q4 = document.getElementById("q4");
        q4.classList.remove("err");
        var q5 = document.getElementById("q5");
        q5.classList.remove("err");

        // Q1
        let rbs = document.querySelectorAll('input[name="q1"]');
        let q1Checked = false;
        for (const rb of rbs) {
            if (rb.checked) {
                q1Checked = true;
                break;
            }
        }

        // Q2
        rbs = document.querySelectorAll('input[name="q2"]');
        let q2Checked = false;
        for (const rb of rbs) {
            if (rb.checked) {
                q2Checked = true;
                break;
            }
        }

        // Q3
        rbs = document.querySelectorAll('input[name="q3"]');
        let q3Checked = false;
        for (const rb of rbs) {
            if (rb.checked) {
                q3Checked = true;
                break;
            }
        }

        // Q4
        rbs = document.querySelectorAll('input[name="q4"]');
        let q4Checked = false;
        for (const rb of rbs) {
            if (rb.checked) {
                q4Checked = true;
                break;
            }
        }

        // Q5
        rbs = document.querySelectorAll('input[name="q5"]');
        let q5Checked = false;
        for (const rb of rbs) {
            if (rb.checked) {
                q5Checked = true;
                break;
            }
        }

        if (!q1Checked) {
            q1.classList.add("err");
        }
        if (!q2Checked) {
            q2.classList.add("err");
        }
        if (!q3Checked) {
            q3.classList.add("err");
        }
        if (!q4Checked) {
            q4.classList.add("err");
        }
        if (!q5Checked) {
            q5.classList.add("err");
        }
        if (!q1Checked || !q2Checked || !q3Checked || !q4Checked || !q5Checked) {
            return false;
        }

        // soumission
        const data = new FormData(form);
        const resp = await fetch('correction.php', { method: 'POST', body: data });
        const resultat = await resp.json();

        // affichage des resultats
        let total = 0;
        let correct = 0;
        for (var q in resultat) {
            if (resultat[q] == true) {
                correct++;
            }
            total++;
        }
        let pourcentage = correct / total * 100;

        var resTotal = document.getElementById("resultat");
        resTotal.innerHTML = "Vous obtenez la note de " + pourcentage.toFixed(0) + "%";
    });
}