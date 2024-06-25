//defining variables
const buttons = document.querySelectorAll('.popup_button');
const popUp = document.querySelector('.pop-up');
const blurry = document.querySelector('.peoplepage')

//array for pop-up cards on People page
const people = [
    {
        name: "Brian Muntean, Ph.D.",
        title: "Principle Investigator",
        about: "Assistant Professor <br> Department of Pharmacology & Toxicology <br> Medical College of Georgia <br> Augusta University<br>-- <br> BS, 2009, Dr. LMV TiIlekeratne – The University of Toledo <br> PhD, 2014, Dr. Surya M. Nauli – The University of Toledo <br> Postdoc, Dr. Kirill A. Martemyanov – The Scripps Research Institute <br> -- <br> <a href='https://www.augusta.edu/mcg/phmtox/brian-muntean-phd.php' target='_blank' class='pub_title'> Augusta University.</a> <br> <a href='https://www.ncbi.nlm.nih.gov/myncbi/brian.muntean.1/bibliography/public/' target='_blank' class='pub_title'> My NCBI Bibliography.</a> <br> <a href='https://scholar.google.com/citations?user=iP8W0M8AAAAJ&hl=en&oi=ao' target='_blank' class='pub_title'> Google Scholar.</a>",
        papers: "See the <a href='papers.html'><em>Papers</em></a> tab for more information.",
        imageSrc: "images/brian_muntean.jpg",

    },
    {
        name: "Douglas Sloan, B.S.",
        title: "Research Assistant",
        about: "I graduated from Augusta University with degrees in chemistry and language arts. Science then, I have been working in Dr. Muntean's lab as a research assistant while seeking admission into medicla school. I'm grateful to be a member of this lab. Currently, we explore the function of KCTD proteins which have strengthened my understanding of biology and neuroscience. My experience on these cutting edge projects have not only been exciting, but have also helped me prepare for the future.",
        papers: "Liao Y, Sloan DC, Widjaja JH, Muntean BS. <a href='https://pubmed.ncbi.nlm.nih.gov/37762619/' target='_blank' class='pub_title'> KCTD5 Forms Hetero-Oligomeric Complexes with Various Members of the KCTD Protein Family.</a>  Int J Mol Sci. 2023 Sep 20;24(18):14317. doi: 10.3390/ijms241814317. PubMed PMID: 37762619; PubMed Central PMCID: PMC10531988.<br><br>Widjaja JH, Sloan DC, Hauger JA, Muntean BS.<a href='https://pubmed.ncbi.nlm.nih.gov/37673671/' target='_blank' class='pub_title'> Customizable Open-Source Rotating Rod (Rotarod) Enables Robust Low-Cost Assessment of Motor Performance in Mice.</a>  eNeuro. 2023 Sep 6;10(9):ENEURO.0123-23.2023. doi: 10.1523/ENEURO.0123-23.2023. PubMed PMID: 37673671; PubMed Central PMCID: PMC10484359.<br><br>Sloan DC, Cryan CE, Muntean BS.<a href='https://pubmed.ncbi.nlm.nih.gov/36736897/' target='_blank' class='pub_title'> Multiple potassium channel tetramerization domain (KCTD) family members interact with Gβγ, with effects on cAMP signaling.</a>  J Biol Chem. 2023 Mar;299(3):102924. doi: 10.1016/j.jbc.2023.102924. Epub 2023 Feb 1. PubMed PMID: 36736897; PubMed Central PMCID: PMC9976452.<br><br>Muntean BS, Marwari S, Li X, Sloan DC, Young BD, Wohlschlegel JA, Martemyanov KA.<a href='https://pubmed.ncbi.nlm.nih.gov/34934014/' target='_blank' class='pub_title'> Members of the KCTD family are major regulators of cAMP signaling.</a>  Proc Natl Acad Sci U S A. 2022 Jan 4;119(1):e2119237119. doi: 10.1073/pnas.2119237119. PubMed PMID: 34934014; PubMed Central PMCID: PMC8740737.",
        imageSrc: "images/douglas_sloan.jpg",
    },
    {
        name: "Casey Cryan, B.S.",
        title: "Research Assistant",
        about: "Hometown: Forty Fort, PA <br><br> Education: <br> King’s College, B.S Chemistry (2021) <br> Augusta University, Biomedical Studies, PhD Neuroscience (2026) <br><br> Research Interests: Dopamine Signaling and KCTD5<br> (1) Role of dorsal striatum in physiology <br> (2) Role of KCTD5 in physiology",
        papers: "Sloan DC, Cryan CE, Muntean BS.<a href='https://pubmed.ncbi.nlm.nih.gov/36736897/' target='_blank' class='pub_title'> Multiple potassium channel tetramerization domain (KCTD) family members interact with Gβγ, with effects on cAMP signaling.</a>  J Biol Chem. 2023 Mar;299(3):102924. doi: 10.1016/j.jbc.2023.102924. Epub 2023 Feb 1. PubMed PMID: 36736897; PubMed Central PMCID: PMC9976452.",
        imageSrc: "images/casey_cryan.jpg",
    },
    {
        name: "Yini Liao, M.S.",
        title: "Research Assistant",
        about: "<strong>EDUCATION:</strong><br> Visual Arts Program • 2012-2013 • University of Toledo, U.S. <br> PHD Program in Biology • 2011-2012 • University of Toledo, U.S. <br> M.S. in Biology • 2011 • Eastern New Mexico University, U.S. <br> B.S. in Forestry • 2010 • Central South University of Forestry and Technology, China <br> B.S. in Biology • 2009 • Eastern New Mexico University, U.S. <br> <strong>WORK EXPERIENCE: </strong> <br> WOC Research Assistant • Charlie Norwood VA Medical Center, Augusta • Jun 2022- Feb 2023 <br> Research Affiliate, Culver Vision Discovery Institute, Augusta University • May 2022- Feb 2023 <br> Research Assistant • Clinical & Experimental Therapeutics, College of Pharmacy, Augusta Campus, University of Georgia • May 2022- Feb 2023 <br> Volunteer Research Assistant • Department of Pharmacology & Toxicology, Medical College of Georgia, Augusta University • Nov 2021- Feb 2023 <br> Library Clerk • Reese Library, Augusta University • Sep 2021- Apr 2022 <br> Realtor • United Real Estate • May 2021- Feb 2022 <br> Business Owner & Photographer • Yini Photography & Dress Boutique • Nov 2014- Sep 2016 <br> Teaching Assistant • University of Toledo • Aug 2011- May 2012 <br> Teaching Assistant • Eastern New Mexico University • Jan 2010- May 2011",
        papers: "Liao Y, Sloan DC, Widjaja JH, Muntean BS. <a href='https://pubmed.ncbi.nlm.nih.gov/37762619/' target='_blank' class='pub_title'> KCTD5 Forms Hetero-Oligomeric Complexes with Various Members of the KCTD Protein Family.</a>  Int J Mol Sci. 2023 Sep 20;24(18):14317. doi: 10.3390/ijms241814317. PubMed PMID: 37762619; PubMed Central PMCID: PMC10531988.<br><br>Liu F, Alfarhan M, Baker L, Shenoy N, Liao Y, Henry-Ojo HO, Somanath PR, Narayanan SP.<a href='https://pubmed.ncbi.nlm.nih.gov/36552864/' target='_blank' class='pub_title'> Treatment with MDL 72527 Ameliorated Clinical Symptoms, Retinal Ganglion Cell Loss, Optic Nerve Inflammation, and Improved Visual Acuity in an Experimental Model of Multiple Sclerosis.</a>  Cells. 2022 Dec 16;11(24):4100. doi: 10.3390/cells11244100. PubMed PMID: 36552864; PubMed Central PMCID: PMC9776605.",
        imageSrc: "images/yini_liao.jpg",
    },
        {
        name: "Forest Ray",
        title: "Undergraduate Student",
        about: " ",
        papers: "--",
        imageSrc: "images/Ray_picture.jpg",
    },
    {
        name: "Josephine Widjaja",
        title: "Undergraduate Student",
        about: "I am a graduate student at the Dental College of Georgia. I began working in Dr. Muntean's lab through the CURS Summer Scholar's program. Here, I investigated the interactions of a motor related protein KCTD5. Since then, I have worked on an engineering project to develop a custom rotating rod device for motor performance testing and am working on a manuscript for this device. I have also performed western blots for experiments related to how the circadian rhythmn influences proteins in the motor learning pathway and presented my findings at the CURS research symposium. Using HTML, CSS, and JavaScript, I have also worked on developing and maintaining a website for the Muntean lab. I hope to continue to explore software and the biological sciences and intermingle disciplines from STEM.",
        papers: "Liao Y, Sloan DC, Widjaja JH, Muntean BS. <a href='https://pubmed.ncbi.nlm.nih.gov/37762619/' target='_blank' class='pub_title'> KCTD5 Forms Hetero-Oligomeric Complexes with Various Members of the KCTD Protein Family.</a>  Int J Mol Sci. 2023 Sep 20;24(18):14317. doi: 10.3390/ijms241814317. PubMed PMID: 37762619; PubMed Central PMCID: PMC10531988.<br><br>Widjaja JH, Sloan DC, Hauger JA, Muntean BS.<a href='https://pubmed.ncbi.nlm.nih.gov/37673671/' target='_blank' class='pub_title'> Customizable Open-Source Rotating Rod (Rotarod) Enables Robust Low-Cost Assessment of Motor Performance in Mice.</a>  eNeuro. 2023 Sep 6;10(9):ENEURO.0123-23.2023. doi: 10.1523/ENEURO.0123-23.2023. PubMed PMID: 37673671; PubMed Central PMCID: PMC10484359.",
        imageSrc: "images/josephine_widjaja.jpg",
    },
    {
        name: "ZiYan Britt, B.S.",
        title: "Undergraduate Student",
        about: " ",
        papers: "--",
        imageSrc: "images/ziyan_britt.jpg",
    },
    {
        name: "Saniya Momin, B.S.",
        title: "Undergraduate Student",
        about: " ",
        papers: "Honor's thesis",
        imageSrc: "images/saniya_momin.jpg",
    },

]

//script for pop-up
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        console.log(event.target.id);
        popUp.innerHTML = 
        `
        <div class='pop-upl'>
            <img src="${people[event.target.id].imageSrc}">
        </div>
        <div class='pop-upr'>
            <h2>${people[event.target.id].name}</h2>
            <em>${people[event.target.id].title}</em>
            <p>${people[event.target.id].about}</p>
            <h4>PAPERS</h4>
            <div class='popup_papers'><p>${people[event.target.id].papers}</p></div>
            <button onClick="togglePopUp()"><img class="blackx" src="images/x.png"><img class="bluex" src="images/xblue.png"></button>
        </div>
        `;
        popUp.classList.toggle('visible');
        window.scrollTo(0, 0);
        blurry.classList.toggle('active');
    })
});

function togglePopUp() {
    popUp.classList.toggle('visible');
    blurry.classList.toggle('active');
}



//navigation page
const activePage = window.location.pathname;
console.log(activePage);

const navLinks = document.querySelectorAll ('nav a').
forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
})



Fancybox.bind("[data-fancybox]", {
// Your custom options
});


//home page gallery scroll script
radiobtn = document.getElementById("radio1");
radiobtn.checked = true;
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4){
    counter=1;
  }
}, 5000);
