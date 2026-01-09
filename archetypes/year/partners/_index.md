{{- $year := path.Base (path.Dir (path.Dir .File.Path)) -}}
---
year: {{ $year }}
title: Sponsors
type: partners
draft: false
---


## Our Sponsors

{{% partners categories="community" year={{ $year }} %}}

{{% /partners %}}


## Call for Sponsors

If you would like to sponsor QEC {{ $year }}, please contact the organizers at {{< button-link label="{{ $year }}@qec-conference.org" url="mailto:{{ $year }}@qec-conference.org?subject=Sponsorship Enquiry" icon="email" >}} for more information. 
