import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Editor, NgxEditorComponent, NgxEditorMenuComponent, Toolbar, Validators} from 'ngx-editor';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-new-post',
  imports: [NgxEditorComponent, NgxEditorMenuComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './new-post.html',
  styleUrl: './new-post.css',
  encapsulation: ViewEncapsulation.None
})
export class NewPost implements OnInit, OnDestroy {
  html = '';
  editor = new Editor();
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form = new FormGroup({
    editorContent: new FormControl(
      { value: 'jsonDoc', disabled: false },
      Validators.required()
    ),
  });

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
