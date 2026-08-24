# SKILL UP — გრაფიკული დიზაინის აკადემია

SKILL UP-ის ოფიციალური საიტი. Next.js (App Router, static export), დეპლოირდება
GitHub Pages-ზე `academy.skup.ge` საბ-დომენზე, ავტომატურად ყოველ `main` push-ზე
(იხ. [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).

## კონტენტი

მთელი საიტის ტექსტი — კურსის აღწერა, ფასები, კურიკულუმი, კონტაქტი — ცხოვრობს
ერთ ფაილში: **[`src/lib/content.ts`](src/lib/content.ts)**.

ყველა ფაქტი (ფასები, ხანგრძლივობა, კურიკულუმი) აღებულია SKILL UP-ის საკუთარი
Facebook გვერდიდან (`facebook.com/profile.php?id=61569417715901`) 2026-08-25-ის
მდგომარეობით. ორი სექცია გაცნობიერებულად ცარიელია, რადგან წყაროში რეალური
შემავსებელი არ მოიძებნა:

- **სტუდენტების ნამუშევრები** (`studentWork`) — ნამდვილი პორტფოლიო სამუშაოები
  ჯერ არ არსებობდა წყაროში. სექცია დიზაინირებულია ცარიელი მდგომარეობისთვის
  ("მალე") და მზადაა კონტენტისთვის, როცა მოგეწოდებათ.
- **ტესტიმონიალები** (`testimonials`) — რეალური ტექსტური შეფასებები არ
  მოიძებნა (მხოლოდ "3 შეფასება, არარეიტინგული" Facebook-ის მხრიდან).

ორივე ცხადად მონიშნულია `placeholder: true`-თი `content.ts`-ში — არაფერია
გამოგონილი.

ცვლილების შემდეგ:

```bash
git add src/lib/content.ts
git commit -m "Update content"
git push
```

## ბრენდის აქტივები

`public/brand/skillup-mark.png` — რეალური SKILL UP ლოგოტიპი, ამოღებული
Facebook-ის პროფილის სურათიდან, რბილი feather-mask-ით კიდეებზე (ბლენდვისთვის
ნებისმიერ მუქ ფონზე). `src/app/icon.png` / `apple-icon.png` — ხელახლა
აგებული pen-nib SVG მარკი favicon ზომებისთვის (საწყისი რასტრი ძალიან პატარაა
ამ გამოსაყენებლად სუფთად).

## ლოკალური გაშვება

```bash
npm install
npm run dev
```

გახსენით [http://localhost:3000](http://localhost:3000).

## Build შემოწმება ლოკალურად

```bash
npm run build
```

სტატიკური ფაილები გენერირდება `out/` ფოლდერში.

## დომენის (academy.skup.ge) მიბმა

1. GitHub repo → **Settings → Pages** → Custom domain: `academy.skup.ge`
   (უკვე კონფიგურირებულია `public/CNAME` ფაილით).
2. `skup.ge`-ს DNS-ის მართვის პანელში დაამატეთ **CNAME ჩანაწერი**
   (რადგან ეს საბ-დომენია, არა apex — A ჩანაწერები არ სჭირდება):

   ```
   Type:  CNAME
   Host:  academy
   Value: PNatroshvili.github.io
   TTL:   Auto / 3600
   ```

3. DNS-ის გავრცელების შემდეგ (რამდენიმე წუთი — რამდენიმე საათი) GitHub
   ავტომატურად გასცემს უფასო HTTPS სერტიფიკატს. Settings → Pages-ში ჩართეთ
   **Enforce HTTPS**.

## სტრუქტურა

```
src/lib/content.ts        ← საიტის მთელი ტექსტი და ფაქტები (რედაქტირებადი)
src/components/           ← UI სექციები (Header, Hero, Course, Curriculum, FAQ...)
src/app/                  ← Next.js App Router (layout + page + SEO routes)
public/brand/             ← ლოგო და OG სურათი
public/CNAME              ← custom domain-ის კონფიგურაცია GitHub Pages-თვის
.github/workflows/        ← ავტომატური build + deploy
```
