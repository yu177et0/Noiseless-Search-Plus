function search(type, filter, words){
    var urlstr = new String('http://pasokatu.com/nsearch#gsc.tab=[type]&gsc.q=[words]&gsc.sort=');
    
    urlstr = urlstr.replace('[words]',words);
    
    if (type == 'web'){
        urlstr = urlstr.replace('[type]', '0')
    }
    else if(type == 'img'){
        urlstr = urlstr.replace('[type]', '1')    
    }
    
    if(filter == 'tab_all'){
       // Do nothing.
    }
    else if (filter == 'tab_hosp_gov'){
        urlstr += '&gsc.ref=more%3A病院_政府';     
    }
    else if (filter == 'tab_hosp'){
        urlstr += '&gsc.ref=more%3A病院';
    }
    else if (filter == 'tab_gov'){
        urlstr += '&gsc.ref=more%3A政府';
    }
    else if (filter == 'tab_msd'){
        urlstr += '&gsc.ref=more%3Amsd';
    }
    else if (filter == 'tab_com'){
        urlstr += '&gsc.ref=more%3A企業';
    }  
    else if (filter == 'tab_com_hosp_gov'){
        urlstr += '&gsc.ref=more%3A企業_病院_政府';
    }     
    
    chrome.tabs.create({url: urlstr});
};

function openShortcuts() { 
  chrome.tabs.create({url: 'chrome://extensions/shortcuts'});
}