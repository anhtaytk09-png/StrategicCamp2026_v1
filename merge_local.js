const fs = require('fs');
const path = require('path');

const dir = 'w:\\OneDrive\\TOOLS\\TOOLS_Antigravity\\ATAYAI-The best AI\\GAS-project with google Appscript';

let index = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
const styles = fs.readFileSync(path.join(dir, 'styles.html'), 'utf8');
const scripts = fs.readFileSync(path.join(dir, 'scripts.html'), 'utf8');

// Replace GAS includes
index = index.replace(/<\?!= include\('styles'\); \?>/g, styles);
index = index.replace(/<\?!= include\('scripts'\); \?>/g, scripts);

// Mock google.script.run
const mockGAS = `
<script>
window.mockGAS = {
  withSuccessHandler: function(callback) {
    return {
      getInitialData: function() {
        callback({
          evaluation: [
            { goal: "Mục tiêu Local 1", owner: "User", target: 100, actual: 95 },
            { goal: "Mục tiêu Local 2", owner: "AI", target: 50, actual: 50 }
          ],
          ssk: {
            start: ["Bắt đầu làm việc local"],
            stop: ["Chờ đợi deploy lâu"],
            keep: ["Dùng AI để code"]
          },
          businessData: { revenue: 1000000, profit: 200000, cashflow: 50000 },
          plan2026: []
        });
      },
      getHelpContent: function(stepIndex) {
        callback("Đây là hướng dẫn giả lập tại local cho Bước " + stepIndex);
      }
    };
  }
};
// Replace real GAS calls with mock
window.originalGoogle = window.google;
window.google = { script: { run: window.mockGAS } };
</script>
`;

index = index.replace('</head>', mockGAS + '</head>');

fs.writeFileSync(path.join(dir, 'local_preview.html'), index);
console.log('Local preview generated successfully at local_preview.html');
