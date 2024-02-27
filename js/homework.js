function openFileExplorer() {
    // 여기에 파일 탐색기 열기 및 파일 선택 로직을 작성합니다.
    // 선택된 파일의 이름을 가져온 후 assignment1 클래스의 span에 표시합니다.
    var fileInput = document.createElement('input');
    fileInput.type = 'file';
  
    fileInput.onchange = function() {
      var selectedFile = fileInput.files[0];
      if (selectedFile) {
        document.getElementById('file_name').innerText = selectedFile.name;
      } else {
        document.getElementById('file_name').innerText = '파일이 선택되지 않았습니다.';
      }
    };
  
    fileInput.click();
  }