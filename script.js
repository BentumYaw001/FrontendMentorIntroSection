let SideBar = document.getElementById('SideBar');
let Company = document.getElementById('Company');
let Features = document.getElementById('Features');
let CompanyMobile = document.getElementById('CompanyMobile');
let FeaturesMobile = document.getElementById('FeaturesMobile');
let FArrowUp = document.getElementById('FArrowUp');
let FArrowDown = document.getElementById('FArrowDown');
let CArrowUp = document.getElementById('CArrowUp');
let CArrowDown = document.getElementById('CArrowDown');
let FArrowUpMobile = document.getElementById('FArrowUpMobile');
let FArrowDownMobile = document.getElementById('FArrowDownMobile');
let CArrowUpMobile = document.getElementById('CArrowUpMobile');
let CArrowDownMobile = document.getElementById('CArrowDownMobile');

function SideBarOpen(){
    SideBar.classList.remove('Hidden');
}

function SideBarClose(){
    SideBar.classList.add('Hidden');
}

function ToggleTab(Tab,Arrow1,Arrow2){
    Tab.classList.toggle('Hidden');
    Arrow1.classList.toggle('Hidden');
    Arrow2.classList.toggle('Hidden');
}

function TheCompany(){
    ToggleTab(Company,CArrowUp,CArrowDown);
}

function TheFeatures(){
    ToggleTab(Features,FArrowUp,FArrowDown);
}

function TheCompanyMobile(){
    ToggleTab(CompanyMobile,CArrowUpMobile,CArrowDownMobile);
}

function TheFeaturesMobile(){
    ToggleTab(FeaturesMobile,FArrowUpMobile,FArrowDownMobile);
}
