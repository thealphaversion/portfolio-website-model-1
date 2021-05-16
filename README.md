# :a: My Portfolio Website [:link:](https://adityac.tech/)

I built this for my personal portfolio. Feel free to use it, make sure to update your data and star this repository :star2:
Built with react.js. All contributions welcome.

## Update data :wave:

### 0. Update home overview data
to update website data, make chages to in `/src/data/resume/overview.json`.

### 1. Add your profile picture
edit the value for the `profile_img` key in `/src/data/assets/assets.json` to a link to your profile image.

### 2. Update project data
to update website data, make chages to in `/src/data/projects/project-data.json`.

### 3. Update resume data
to update website data, make chages to in `/src/data/resume/resume-data.json`.

### 4. Update downloadable resume
this is a two step process (unless we have the same name :joy:)
1. replace the resume in `/src/assets/` with your own.
2. edit the filename in `/src/data/resume/resume-file-name.json`.

### 5. Update contact links
make changes to the github, linkedin, twitter and medium links by changing the links in `/src/data/social/social.json`.
    
### 6. Update favicon (or not :joy:)
replace favicon in `/public`.

### 7. Add or remove other external navigation links
the `/src/data/links/links.json` file is used to display extra external navigation links in the navigation bar.

```
data structure
{
  "links": [                                                    - The array of link objects - Can be an empty array.
    {
      "title": "Timeline",                                      - The label for the link
      "url": "https://timeline.adityachakraborti.com",          - The url of the link
      "target": "_blank"                                        - Optional: The target, or where we want to display the link
    }
  ]
}
```
you can have an empty array of links if you do not have any links to list on the navigation bar
```
{
  "links": []
}
```



#### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
