---
title: 'Updating your .gitignore'
date: '2022-06-30'
excerpt: 'Find out how to easily add or change a .gitignore for an existing Git repository.'
tags: ['Git']
---

Making changes to your .gitignore file is easy enough but it can be puzzling, when you do your next commit, to see that the newly ignored files are anything but.

Git captures the state of your files in an index, excluding every file that in .gitignore. To implement your new .gitignore you simply need to rebuild the index.

## Clear the Git index

Be sure to commit or stash any unsaved changes and then run:

```terminal
  git rm -r --cached .
```

This will remove all the files from the index.

## Update the Git index

Now you need to create an up to date index with:

```terminal
  git add .
```

This adds all the current files to the index, paying attention to the exclusions in your new .gitignore file.

You can then commit the updated repository with:

```terminal
  git commit -m ".gitignore is now working"
```

Simple and straightforward.
