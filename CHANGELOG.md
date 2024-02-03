# vc-status-list-context ChangeLog

## 3.1.1 - 2024-02-02

### Fixed
- Fix NPM badge link.

## 3.1.0 - 2024-02-02

### Fixed
- Distribute built ESM files.

### Changed
- Updated dev dependencies.
- **NOTE**: Soft breaking release. The built package likely still works on
  Node.js 12+ as before, but the build dependencies were updated and only
  support modern Node.js versions. The package is only tested on 18+ now.
  Please report any related issues.

## 3.0.1 - 2022-06-10

### Fixed
- Update `CONTEXT_URL_V1` to `https://w3id.org/vc/status-list/2021/v1`.

## 3.0.0 - 2022-04-05

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
