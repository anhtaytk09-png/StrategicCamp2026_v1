/**
 * Yearly Goal Master - Backend
 * Developed with Tesla Style Aesthetic
 */

function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('Yearly Goal Master | Premium Dashboard')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Thêm các file HTML con vào file chính
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * Lấy dữ liệu mẫu từ Spreadsheet (Sẽ mở rộng sau)
 */
function getInitialData() {
  // TODO: Kết nối với Google Sheets để lấy dữ liệu thực tế
  return {
    user: "TK - ANH TAY",
    currentStep: 1,
    steps: [
      "Đánh giá Công ty/Bộ phận",
      "Bài tập Start-Stop-Keep",
      "Dữ liệu kinh doanh",
      "Đánh giá chiến lược",
      "Kế hoạch năm 2026",
      "Roadmap 4 quý",
      "Kế hoạch Q1 Toàn công ty",
      "Kế hoạch Q1 Bộ phận"
    ]
  };
}

/**
 * Hàm lấy thông tin trợ giúp (cho nút Information)
 */
function getHelpContent(stepIndex) {
  const helpData = {
    1: "Hướng dẫn Đánh giá: Xem lại mục tiêu đầu năm. Tính % hoàn thành = Thực tế / Mục tiêu. Trạng thái: Hoàn thành (>=100%), Không đạt (<=80%).",
    2: "Bài tập SSK: Dành 15 phút tư duy về những việc nên Bắt đầu, nên Dừng lại và nên Tiếp tục duy trì.",
    // Sẽ bổ sung đầy đủ 8 bước dựa trên ảnh
  };
  return helpData[stepIndex] || "Chọn một bước để xem hướng dẫn chi tiết.";
}
