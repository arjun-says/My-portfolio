$(document).ready(function () {
    // Initialize the book
    $('#book').turn({
      width: 800,
      height: 600,
      autoCenter: true,
      duration: 1000,
    });
  
    // Page navigation buttons
    $('#prev').on('click', function () {
      $('#book').turn('previous');
      updatePageInfo();
    });
  
    $('#next').on('click', function () {
      $('#book').turn('next');
      updatePageInfo();
    });
  
    // Update page info
    function updatePageInfo() {
      const currentPage = $('#book').turn('page');
      const totalPages = $('#book').turn('pages');
      $('#page-info').text(`Page ${currentPage} of ${totalPages}`);
    }
  
    // Save notes to local storage
    $('.page').on('input', function () {
      const pageIndex = $(this).index();
      localStorage.setItem(`page_${pageIndex}`, $(this).html());
    });
  
    // Load saved notes
    $('.page').each(function (index) {
      const savedContent = localStorage.getItem(`page_${index}`);
      if (savedContent) $(this).html(savedContent);
    });
  
    // Download as PDF
    $('#download').on('click', function () {
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF();
  
      $('.page').each(function (index) {
        pdf.text($(this).text(), 10, 10 + index * 10);
      });
  
      pdf.save('Notebook.pdf');
    });
  
    // Initial page info
    updatePageInfo();
  });
  