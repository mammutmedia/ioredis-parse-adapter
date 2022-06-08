/* eslint-disable no-template-curly-in-string */
module.exports = {
  branches: ['master'],
  plugins: [
    // https://github.com/semantic-release/commit-analyzer
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md'
      }
    ],
    '@semantic-release/npm',
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'src/*/.js', 'package.json'],
        message:
          'chore(release): set `package.json` to ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ]
  ],
  tagFormat: '${version}'
}
