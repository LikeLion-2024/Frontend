function handleFileSelection() {
    var selectedFiles = document.getElementById('fileInput').files;
    var fileContainer = document.getElementById('fileContainer');

    for (var i = 0; i < selectedFiles.length; i++) {
      var fileBox = document.createElement('li');
      fileBox.classList.add('file-box');
      fileBox.dataset.index = i + 1;

      var fileName = document.createElement('p');
      fileName.classList.add('file-name');
      fileName.textContent = selectedFiles[i].name;
      
      var deleteButton = document.createElement('span');
      deleteButton.classList.add('delete-button');
      deleteButton.textContent = '삭제';

      deleteButton.addEventListener('click', function () {
        fileBox.remove();
      });

      fileBox.appendChild(fileName);
      fileBox.appendChild(deleteButton);
      fileContainer.appendChild(fileBox);
    }
}