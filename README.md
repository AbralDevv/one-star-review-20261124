# One-Star Review of Something Essential

[![make.fun competition](https://img.shields.io/badge/make.fun-competition-blue)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![make.fun rank](https://img.shields.io/badge/make.fun-rank-pending-lightgrey)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![make.fun reward](https://img.shields.io/badge/make.fun-reward-%245-green)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629)

A deadpan one-star review of sleep — an everyday essential — for the
[make.fun bounty](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629)
"One-Star Review of Something Essential" ($5 pot, 5 places paid $1 each).

## Entry

> Sleep: paid eight hours, woke up more tired than when I arrived. One star, would not recommend.

95 characters, one line — inside the 160-character limit. The sharpest true
grievance about sleep (paying eight hours and waking up more tired), filed in
earnest against a thing that cannot be fixed, with the turn in the last words.

## Run

```sh
node main.ts
```

`main.ts` (Node stdlib only, no network) writes the review to `entry.txt` in
`$MAKEFUN_OUTPUT_DIR`, falling back to `/output`, then `./output`. It validates
the brief first: one line, 160 characters or fewer, non-empty — and exits
non-zero if the review ever breaks the limit.
