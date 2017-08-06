Based on the nature of your change, please use the relevant template below and modify to suit your needs.

Please ensure you copy the completed "Commit Message For Review" section below into your final commit body when merging to master. This allows us to validate that the generated release notes are clear enough for consumers to follow.

Don't forget that what's written here forms the upgrade guide for consumers, and upgrading can easily become a long and arduous process. To counter this, please be as descriptive as possible, explaining the reasoning behind the change. Since there are many different consumers, changes should be documented from the perspective of the style guide itself, so avoid making specific reference to the application you're working on.


Major release template
======================


## Commit Message For Review

BREAKING CHANGE:

{{ Description of breaking API change }}

REASON FOR CHANGE:

{{ Reason for change }}

MIGRATION GUIDE:

Before:

```js
{{ Old code }}
```

After:

```js
{{ New code }}
```


Minor release template
======================


## Commit Message For Review

{{ Optional description of change }}

REASON FOR CHANGE:

{{ Reason for change }}

EXAMPLE USAGE:

```js
{{ Code }}
```


Patch release template
======================


## Commit Message For Review

{{ Optional description of change }}

REASON FOR CHANGE:

{{ Reason for change }}


Non-release template
====================

## Commit Message For Review

{{ Optional description of change }}
