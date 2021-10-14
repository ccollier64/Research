from satellite_czml import satellite_czml


tle = [['TAGSAT2', '1 48958U 21059CH  21286.94264439  .00001374  00000-0  79021-4 0  9999', '2 48958  97.5265  54.3992 0016056 229.6849 130.2980 15.14073198 16661']]

czml_string = satellite_czml(tle_list=tle).get_czml()

print(czml_string)
