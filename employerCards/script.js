let employers=[
    {
        name:"Nadir",
        surname:"Abdullayev",
        description:"kuftfcj hfjhvkg fhcg hmj jkn lkbjtv dhgdf hjgj fcg vbhn jbhgvc ffg vbhnjhb gvfc dgv hbjnt redr tgy huygt frdx cgfv bhnk",
        profession:"Musician",
        image:"https://i.pravatar.cc/300"
    },
    {
        name:"Zarif",
        surname:"Allahverdiyeva",
        description:"azft gyhu jkgfdc xcg fhjklju hygf dxsgf vhjkj hgfv cdf gv hjgcvb hjnhb gvfcd gvbhjn knhbgv fcdf gvbh",
        profession:"Data-scientist",
        image:"https://i.pravatar.cc/300"
    },
    {
        name:"Nihad",
        surname:"Jafarzadeh",
        description:"fdv ghn jklj hgf vc xfvgh jnknh fjy tfrfv gbhnj mklj hgf dcxf gvb hnjk ljuh ygf dcvg bhnjk hygtf dcvgb hnjk hgh gvfgbh nh vgf dcgfv",
        profession:"System Administrator",
        image:"https://i.pravatar.cc/300"
    },
    {
        name:"Leyla",
        surname:"Ahmadova",
        description:"adc fvgb hnkjlj hgfd cgf vhjo lki juhy gtf dxsg fvbh njku hytr fdc vbnj uhyt rfdgv hhg fdcfv gb hnjk ljh gfc vgfhnjkl jhg fvc",
        profession:"Front-end Developer",
        image:"https://i.pravatar.cc/300",
    },
    {
        name:"Aygun",
        surname:"Alicanova",
        description:"iuyt rerht iytt yuigjf hdgf hkg fdv xcbn hjgf dvxhh gdx fcghjk hgfd xcvbn jkhfg dvcb jhg fcfbg hjk ljhg bc bgvhjh jgb fcv xbgh",
        profession:"Video editor",
        image:"https://i.pravatar.cc/300",
    },
    {
        name:"Teyyub",
        surname:"Aliyev",
        description:"oiuiy trews azsxf dcf vgb hjn klimj nygbt fvrdc szxvfg hjkhg fdsf cgvh bjkj uhn ygtfvd xfcv hbjk hgfv chjk mhngv cfg vhbj hgfh bg",
        profession:"Back-end developer",
        image:"https://i.pravatar.cc/300",
    },
    {
        name:"Emin",
        surname:"Amirov",
        description:"pytr dvsf ghkj ljuk ygj tfr bdx vzs lk jgf ghj kyt rdx cvgh kg fdg fhkg jfhd gcfb vhj kgfd cfbgn hgfb cgv nhkg f bcfgnh kfbc bfgn hx",
        profession:"Android developer",
        image:"https://i.pravatar.cc/300",
    },
    {
        name:"Farah",
        surname:"Asadli",
        description:"wfu ygih weiu fhwl flekf haskd b,j shc jsd bfj aski dscj sxck jaskf ahkdA HK.J CSKJC HID HKAJ SHK.JSD FKJD SAFK.jh sdjh fkj",
        profession:"IOS developer",
        image:"https://i.pravatar.cc/300"
    }
];
const employersContainer=document.querySelector(".employers");
for(let i=0;i<employers.length;i++){
    let employer=document.createElement("div");
    employer.className="employer";
    employer.innerHTML=`
    <div class="violet"></div>
                <div class="info">
                    <div class="image">
                        <img src="${employers[i].image}" alt="">
                    </div>
                    <div class="details">
                        <h1 class="fullname">${employers[i].name} ${employers[i].surname}</h1>
                        <h2 class="prof">${employers[i].profession}</h2>
                        <div class="desc">${employers[i].description}</div>
                        <div class="button">View Profile</div>
                    </div>
                </div>
    `
    employersContainer.appendChild(employer);
}
