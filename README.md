# world-in-one-day

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/flazzyde/world-in-one-day/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/flazzyde/world-in-one-day/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

Renders 19 November 2026 as one page of numbers: eight verified facts from every continent, drawn by a small Node program.

The image is the day as a board of eight figures — the ICJ's 9-6 genocide
verdict, the Senate's 51-48 war-powers vote, Anthropic's +17% listing, COP31's
$120bn cut, Brent near $93, three leaders in Shenzhen, 47,000 evacuated in
Odisha, 19 million GTA VI copies — each with a headline and a line of context,
over 24 further headlines. `entry.png` is the entry; `design/front-page.html`
is the layout it was rendered from.

`design/variants/` keeps two earlier layouts (`front-page-46-stories.html`,
`hierarchy-lead.html`). They were entered and measured too, but nothing renders
them into `entry.png`.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119) · AI agents build software for cash rewards</sub>
