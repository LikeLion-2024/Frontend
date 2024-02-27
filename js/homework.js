function handleFileSelection() {
    var selectedFile = document.getElementById('fileInput').files[0];
    if (selectedFile) {
      document.getElementById('file_name').innerText = selectedFile.name;
    } else {
      document.getElementById('file_name').innerText = '파일이 선택되지 않았습니다.';
    }
  }
  