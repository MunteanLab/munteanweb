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
        name: "Casey Cryan, B.S.",
        title: "Graduate Student",
        about: "Hometown: Forty Fort, PA <br><br> <strong>EDUCATION:</strong><br> King’s College, B.S Chemistry (2021) <br> Augusta University, Biomedical Studies, PhD Neuroscience (2026) <br><br> <strong>Research Interests:</strong><br> Dopamine signaling and motor function<br>",
        papers: "Cryan CE, Liao Y, Widjaja JH, Sloan DC, Han Q, Rudic RD, Muntean BS. <a href='https://pubmed.ncbi.nlm.nih.gov/40473476/' target='_blank' class='pub_title'> Bmal1 modulates striatal cAMP signaling and motor learning.</a>  J Neurosci. 2025 Jul 9;45(28):e0474242025.  doi: 10.1523/JNEUROSCI.0474-24.2025. PubMed PMID: 40473476; PubMed Central PMCID: PMC12244325.<br><br>Sloan DC, Cryan CE, Muntean BS.<a href='https://pubmed.ncbi.nlm.nih.gov/36736897/' target='_blank' class='pub_title'> Multiple potassium channel tetramerization domain (KCTD) family members interact with Gβγ, with effects on cAMP signaling.</a>  J Biol Chem. 2023 Mar;299(3):102924. doi: 10.1016/j.jbc.2023.102924. Epub 2023 Feb 1. PubMed PMID: 36736897; PubMed Central PMCID: PMC9976452.",
        imageSrc: "images/casey_cryan.jpg",
    },
    {
        name: "Yini Liao, M.S.",
        title: "Research Associate",
        about: "<strong>EDUCATION:</strong><br> Visual Arts Program • 2012-2013 • University of Toledo, U.S. <br> PHD Program in Biology • 2011-2012 • University of Toledo, U.S. <br> M.S. in Biology • 2011 • Eastern New Mexico University, U.S. <br> B.S. in Forestry • 2010 • Central South University of Forestry and Technology, China <br> B.S. in Biology • 2009 • Eastern New Mexico University, U.S. <br><br> <strong>WORK EXPERIENCE: </strong> <br> WOC Research Assistant • Charlie Norwood VA Medical Center, Augusta • Jun 2022- Feb 2023 <br> Research Affiliate, Culver Vision Discovery Institute, Augusta University • May 2022- Feb 2023 <br> Research Assistant • Clinical & Experimental Therapeutics, College of Pharmacy, Augusta Campus, University of Georgia • May 2022- Feb 2023 <br> Volunteer Research Assistant • Department of Pharmacology & Toxicology, Medical College of Georgia, Augusta University • Nov 2021- Feb 2023 <br> Library Clerk • Reese Library, Augusta University • Sep 2021- Apr 2022 <br> Realtor • United Real Estate • May 2021- Feb 2022 <br> Business Owner & Photographer • Yini Photography & Dress Boutique • Nov 2014- Sep 2016 <br> Teaching Assistant • University of Toledo • Aug 2011- May 2012 <br> Teaching Assistant • Eastern New Mexico University • Jan 2010- May 2011",
        papers: "Liao Y, Muntean BS. <a href='https://pubmed.ncbi.nlm.nih.gov/41086914/' target='_blank' class='pub_title'> Pathogenic variants in KCTD1 disrupt cAMP signaling and cellular communication associated with developmental pathways.</a> J Biol Chem. 2025 Oct 12:110813. doi: 10.1016/j.jbc.2025.110813. PubMed PMID: 41086914.<br><br>Bhansali PR, Sonkusare SM, Savale SS, Wijayasinghe YS, Liao Y, Sloan DC, Chaturbhuj GU, Muntean BS. <a href='https://pubmed.ncbi.nlm.nih.gov/41103911/' target='_blank' class='pub_title'> Comprehensive medicinal chemistry survey highlights a portfolio of lead molecules for Alzheimer's disease therapy.</a>  Front Chem. 2025 Oct 1:13:1642190. doi: 10.3389/fchem.2025.1642190. eCollection 2025. PubMed PMID: 41103911; PubMed Central PMCID: PMC12521189.<br><br>Yee AG, Liao Y, Muntean BS, Ford CP. <a href='https://pubmed.ncbi.nlm.nih.gov/40638729/' target='_blank' class='pub_title'> Discrete spatiotemporal encoding of striatal dopamine transmission.</a>  Science. 2025 Jul 10;389(6756):200-206. doi: 10.1126/science.adp9833. PubMed PMID: 40638729.<br><br>Cryan CE, Liao Y, Widjaja JH, Sloan DC, Han Q, Rudic RD, Muntean BS. <a href='https://pubmed.ncbi.nlm.nih.gov/40473476/' target='_blank' class='pub_title'> Bmal1 modulates striatal cAMP signaling and motor learning.</a>  J Neurosci. 2025 Jul 9;45(28):e0474242025.  doi: 10.1523/JNEUROSCI.0474-24.2025. PubMed PMID: 40473476; PubMed Central PMCID: PMC12244325.<br><br>Sloan DC, Liao Y, Ray, F, Muntean BS. <a href='https://pubmed.ncbi.nlm.nih.gov/40233107/' target='_blank' class='pub_title'> The G protein modifier KCTD5 tunes the decoding of neuromodulatory signals necessary for motor function in striatal neurons.</a>  PLoS Biol. 2025 Apr 15;23(4):e3003117.  doi: 10.1371/journal.pbio.3003117. PubMed PMID: 40233107.<br><br>Liao Y, Muntean BS. <a href='https://pubmed.ncbi.nlm.nih.gov/39413138/' target='_blank' class='pub_title'> KCTD1 regulation of Adenylyl cyclase type 5 adjusts striatal cAMP signaling.</a>  Proc Natl Acad Sci U S A. 2024 Oct 22;121(43):e2406686121. doi: 10.1073/pnas.2406686121. PubMed PMID: 39413138. PubMed Central PMCID: PMC11513970.<br><br>Liao Y, Sloan DC, Widjaja JH, Muntean BS. <a href='https://pubmed.ncbi.nlm.nih.gov/37762619/' target='_blank' class='pub_title'> KCTD5 Forms Hetero-Oligomeric Complexes with Various Members of the KCTD Protein Family.</a>  Int J Mol Sci. 2023 Sep 20;24(18):14317. doi: 10.3390/ijms241814317. PubMed PMID: 37762619; PubMed Central PMCID: PMC10531988.<br><br>Liu F, Alfarhan M, Baker L, Shenoy N, Liao Y, Henry-Ojo HO, Somanath PR, Narayanan SP.<a href='https://pubmed.ncbi.nlm.nih.gov/36552864/' target='_blank' class='pub_title'> Treatment with MDL 72527 Ameliorated Clinical Symptoms, Retinal Ganglion Cell Loss, Optic Nerve Inflammation, and Improved Visual Acuity in an Experimental Model of Multiple Sclerosis.</a>  Cells. 2022 Dec 16;11(24):4100. doi: 10.3390/cells11244100. PubMed PMID: 36552864; PubMed Central PMCID: PMC9776605.",
        imageSrc: "images/yini_liao.jpg",
    },
        {
        name: "Forest Ray",
        title: "Undergraduate Student",
        about: " ",
        papers: "Sloan DC, Liao Y, Ray, F, Muntean BS. <a href='https://pubmed.ncbi.nlm.nih.gov/40233107/' target='_blank' class='pub_title'> The G protein modifier KCTD5 tunes the decoding of neuromodulatory signals necessary for motor function in striatal neurons.</a>  PLoS Biol. 2025 Apr 15;23(4):e3003117.  doi: 10.1371/journal.pbio.3003117. PubMed PMID: 40233107.<br><br>",
        imageSrc: "images/Ray_picture.jpg",
    },
 	   {
        name: "Josephine Widjaja",
        title: "Undergraduate Student",
        about: "Next: Graduate student at the Dental College of Georgia, Augusta University",
        papers: "Cryan CE, Liao Y, Widjaja JH, Sloan DC, Han Q, Rudic RD, Muntean BS. <a href='https://pubmed.ncbi.nlm.nih.gov/40473476/' target='_blank' class='pub_title'> Bmal1 modulates striatal cAMP signaling and motor learning.</a>  J Neurosci. 2025 Jul 9;45(28):e0474242025.  doi: 10.1523/JNEUROSCI.0474-24.2025. PubMed PMID: 40473476; PubMed Central PMCID: PMC12244325.<br><br>Liao Y, Sloan DC, Widjaja JH, Muntean BS. <a href='https://pubmed.ncbi.nlm.nih.gov/37762619/' target='_blank' class='pub_title'> KCTD5 Forms Hetero-Oligomeric Complexes with Various Members of the KCTD Protein Family.</a>  Int J Mol Sci. 2023 Sep 20;24(18):14317. doi: 10.3390/ijms241814317. PubMed PMID: 37762619; PubMed Central PMCID: PMC10531988.<br><br>Widjaja JH, Sloan DC, Hauger JA, Muntean BS.<a href='https://pubmed.ncbi.nlm.nih.gov/37673671/' target='_blank' class='pub_title'> Customizable Open-Source Rotating Rod (Rotarod) Enables Robust Low-Cost Assessment of Motor Performance in Mice.</a>  eNeuro. 2023 Sep 6;10(9):ENEURO.0123-23.2023. doi: 10.1523/ENEURO.0123-23.2023. PubMed PMID: 37673671; PubMed Central PMCID: PMC10484359.",
        imageSrc: "images/josephine_widjaja.jpg",
    },
    {
        name: "ZiYan Britt, B.S.",
        title: "Undergraduate Student",
        about: "Next: NIH Postbaccalaureate Intramural Research Training Award, National Institute of Environmental Health Sciences (NIEHS)",
        papers: "--",
        imageSrc: "images/ziyan_britt.jpg",
    },
    {
        name: "Saniya Momin, B.S.",
        title: "Undergraduate Student",
        about: "Next: Research Assistant, Emory University",
        papers: "Honor's thesis",
        imageSrc: "images/saniya_momin.jpg",
    },
	{
        name: "Douglas Sloan, B.S.",
        title: "Research Assistant",
        about: "Next: Biomedical Sciences PhD student at Augusta University",
        papers: "Cryan CE, Liao Y, Widjaja JH, Sloan DC, Han Q, Rudic RD, Muntean BS. <a href='https://pubmed.ncbi.nlm.nih.gov/40473476/' target='_blank' class='pub_title'> Bmal1 modulates striatal cAMP signaling and motor learning.</a>  J Neurosci. 2025 Jul 9;45(28):e0474242025.  doi: 10.1523/JNEUROSCI.0474-24.2025. PubMed PMID: 40473476; PubMed Central PMCID: PMC12244325.<br><br>Sloan DC, Liao Y, Ray, F, Muntean BS. <a href='https://pubmed.ncbi.nlm.nih.gov/40233107/' target='_blank' class='pub_title'> The G protein modifier KCTD5 tunes the decoding of neuromodulatory signals necessary for motor function in striatal neurons.</a>  PLoS Biol. 2025 Apr 15;23(4):e3003117.  doi: 10.1371/journal.pbio.3003117. PubMed PMID: 40233107.<br><br>Liao Y, Sloan DC, Widjaja JH, Muntean BS. <a href='https://pubmed.ncbi.nlm.nih.gov/37762619/' target='_blank' class='pub_title'> KCTD5 Forms Hetero-Oligomeric Complexes with Various Members of the KCTD Protein Family.</a>  Int J Mol Sci. 2023 Sep 20;24(18):14317. doi: 10.3390/ijms241814317. PubMed PMID: 37762619; PubMed Central PMCID: PMC10531988.<br><br>Widjaja JH, Sloan DC, Hauger JA, Muntean BS.<a href='https://pubmed.ncbi.nlm.nih.gov/37673671/' target='_blank' class='pub_title'> Customizable Open-Source Rotating Rod (Rotarod) Enables Robust Low-Cost Assessment of Motor Performance in Mice.</a>  eNeuro. 2023 Sep 6;10(9):ENEURO.0123-23.2023. doi: 10.1523/ENEURO.0123-23.2023. PubMed PMID: 37673671; PubMed Central PMCID: PMC10484359.<br><br>Sloan DC, Cryan CE, Muntean BS.<a href='https://pubmed.ncbi.nlm.nih.gov/36736897/' target='_blank' class='pub_title'> Multiple potassium channel tetramerization domain (KCTD) family members interact with Gβγ, with effects on cAMP signaling.</a>  J Biol Chem. 2023 Mar;299(3):102924. doi: 10.1016/j.jbc.2023.102924. Epub 2023 Feb 1. PubMed PMID: 36736897; PubMed Central PMCID: PMC9976452.<br><br>Muntean BS, Marwari S, Li X, Sloan DC, Young BD, Wohlschlegel JA, Martemyanov KA.<a href='https://pubmed.ncbi.nlm.nih.gov/34934014/' target='_blank' class='pub_title'> Members of the KCTD family are major regulators of cAMP signaling.</a>  Proc Natl Acad Sci U S A. 2022 Jan 4;119(1):e2119237119. doi: 10.1073/pnas.2119237119. PubMed PMID: 34934014; PubMed Central PMCID: PMC8740737.",
        imageSrc: "images/douglas_sloan.jpg",
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
