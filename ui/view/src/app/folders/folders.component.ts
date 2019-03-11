import { Component, OnInit } from '@angular/core';
import { FolderService } from '../folder.service';
import {Folder} from '../folder';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {
  folders:Folder[];
  folder:Folder;

  constructor(private folderService:FolderService) { }

  ngOnInit() {
      let a= this.folderService.getFolders();
    console.log(a);
    }

}
