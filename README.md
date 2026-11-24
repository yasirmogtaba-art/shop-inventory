# نظام مخزون المحل | Shop Inventory

نظام عربي بسيط (RTL) لإدارة مخزون المحلات الصغيرة (قطع غيار، إلكترونيات، أي محل)، مفتوح المصدر ويعمل مباشرة في المتصفح بدون تثبيت وبدون خادم.

A simple Arabic-first (RTL) inventory system for small shops. Open source, runs directly in the browser with no install and no server.

## المزايا | Features

- إدارة المنتجات: إضافة وتعديل، تصنيفات، وحدات، حد تنبيه للمخزون المنخفض / Product management with categories, units and low-stock alerts
- تسجيل المبيعات والمشتريات والمصروفات مع تحديث المخزون تلقائياً / Sales, purchases and expenses that update stock automatically
- صلاحيات: مدير (كل شيء) وموظف (تعديل المنتجات فقط) / Roles: admin (full access) and employee (edit products only)
- تقارير وحركات آخر العمليات / Transaction reports
- تصدير CSV ونسخة احتياطية JSON / CSV export and JSON backup
- واجهة عربية متجاوبة تعمل على الجوال / Responsive Arabic UI that works on mobile

## التشغيل | Quick start

1. حمّل المشروع أو انسخه: `git clone <repo-url>` / Download or clone the repo
2. افتح `welcome.html` في المتصفح / Open `welcome.html` in your browser
3. سجّل الدخول بأحد الحسابين التجريبيين / Log in with a demo account:

| الدور / Role | البريد / Email | كلمة المرور / Password |
|---|---|---|
| مدير / Admin | `admin@example.com` | `admin123` |
| موظف / Employee | `employee@example.com` | `emp123` |

يمكنك الضغط على "إضافة بيانات تجريبية" من حساب المدير لتجربة النظام.

## تنبيه مهم | Important security note

**هذه نسخة تجريبية.** البيانات تُحفظ في `localStorage` داخل المتصفح فقط (لا تُشارك بين الأجهزة)، وحسابات الدخول مكتوبة في ملف `config.js`، لذلك **لا تُعتبر حماية حقيقية**. لا تستخدمها لبيانات حساسة قبل ربطها بخادم ومصادقة حقيقية.

**This is a demo version.** Data lives in the browser's `localStorage` only (not shared between devices), and the demo accounts are hardcoded in `config.js`, so authentication is **not real security**. Do not use it for sensitive data until it is connected to a real backend with proper authentication.

## هيكل المشروع | Structure

```
welcome.html   الصفحة الرئيسية / landing page
login.html     تسجيل الدخول / login
index.html     لوحة الإدارة / dashboard
app.css        التصميم / styles
config.js      الحسابات التجريبية ومفاتيح التخزين / demo users and storage keys
auth.js        منطق تسجيل الدخول / login logic
app.js         منطق التطبيق / app logic
```

## خارطة الطريق | Roadmap

- [ ] ربط بقاعدة بيانات سحابية ومصادقة حقيقية / Real backend and authentication
- [ ] فواتير البيع / Sales invoices
- [ ] دعم أكثر من عملة / Multi-currency
- [ ] تقارير الأرباح / Profit reports
- [ ] اختبارات تلقائية / Automated tests

## المساهمة | Contributing

المساهمات مرحب بها: افتح Issue أو Pull Request. / Contributions are welcome: open an issue or a pull request.

## الرخصة | License

MIT, انظر ملف [LICENSE](LICENSE).
