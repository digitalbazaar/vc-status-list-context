# vc-status-list-context ChangeLog

## 3.0.0 - 2022-04-TBD

### Changed
- Sync with [W3C CCG VC Status List 2021][].
- **BREAKING**: Update context.
  - Rename `RevocationList2021` to `StatusList2021`.
  - Rename `RevocationList2021Status` to `StatusList2021Entry`.
  - Remove `SuspensionList2021Status`.
  - Add `statusPurpose` field for status purposes `revocation` and `suspension`.

## 2.0.0 - 2022-02-21

### Changed
- **BREAKING**: Renamed package to `@digitalbazaar/vc-status-list-context`.

## 1.0.0 - 2022-01-31

See git history for changes previous to this release.

[W3C CCG VC Status List 2021]: https://github.com/w3c-ccg/vc-status-list-2021/
