import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {


  tabs: any[] = [
    { title: 'Dashboard',   
      content: 'Content for Tab 1',
      icon: 'home'  
    },
    { title: 'Profile',   
      content: 'Content for Tab 2',
      icon: 'home'  
    },
    { title: 'Contacts', 
      content: 'Content for Tab 3',
      icon: 'id-card'  
    },
    { title: 'Security',   
      icon: 'ban'  
    },
  ];

  activeTab: number = 0;
  activeTabContent: string = this.tabs[0].content;
  showDialogFlag: boolean = false; // Added flag for dialog visibility

  selectTab(index: number) {
    if (index === 3) {
      this.showDialog();
    } else {
      this.activeTab = index;
      this.activeTabContent = this.tabs[index].content;
    }
  }

  showDialog() {
    // Set the flag to true to display the dialog
    this.showDialogFlag = true;
  }

  ngOnInit(): void {}
}
